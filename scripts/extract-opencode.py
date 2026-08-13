import json

from playwright.sync_api import sync_playwright


URL = "https://opencode.ai/"
PROPERTIES = [
    "fontFamily",
    "fontSize",
    "fontWeight",
    "lineHeight",
    "letterSpacing",
    "color",
    "backgroundColor",
    "padding",
    "margin",
    "width",
    "height",
    "maxWidth",
    "display",
    "flexDirection",
    "gap",
    "border",
    "borderRadius",
    "position",
    "top",
    "zIndex",
    "transition",
    "opacity",
]


def snapshot(page, selector):
    return page.eval_on_selector(
        selector,
        """(element, properties) => {
          const computed = getComputedStyle(element);
          return Object.fromEntries(properties.map((property) => [property, computed[property]]));
        }""",
        PROPERTIES,
    )


def inspect_viewport(browser, width, height):
    context = browser.new_context(
        viewport={"width": width, "height": height},
        locale="en-US",
        color_scheme="light",
    )
    page = context.new_page()
    page.goto(URL, wait_until="networkidle")
    page.wait_for_timeout(1200)

    selectors = {
        "page": '[data-page="opencode"]',
        "container": '[data-component="container"]',
        "header": '[data-component="top"]',
        "desktop_nav": '[data-component="nav-desktop"]',
        "mobile_nav": '[data-component="nav-mobile"]',
        "hero": '[data-component="hero"]',
        "hero_title": '[data-component="hero"] h1',
        "hero_copy": '[data-slot="hero-copy"] p',
        "install_tabs": '[data-component="tabs"]',
        "video": '[data-component="video"] video',
        "what": '[data-component="what"]',
        "growth": '[data-component="growth"]',
        "privacy": '[data-component="privacy"]',
        "faq": '[data-component="faq"]',
    }
    styles = {
        name: snapshot(page, selector)
        for name, selector in selectors.items()
        if page.locator(selector).count()
    }
    boxes = {
        name: page.locator(selector).first.bounding_box()
        for name, selector in selectors.items()
        if page.locator(selector).count()
    }

    scroll_states = []
    for y in [0, 320, 900, 1800]:
        page.evaluate("position => window.scrollTo(0, position)", y)
        page.wait_for_timeout(180)
        scroll_states.append(
            {
                "scrollY": page.evaluate("window.scrollY"),
                "header": snapshot(page, selectors["header"]),
            }
        )

    tab_states = []
    for tab in page.locator('[data-slot="tab"]').all():
        label = tab.inner_text().strip()
        tab.click()
        page.wait_for_timeout(220)
        panel = page.locator('[data-slot="panel"][data-selected]').first
        tab_states.append(
            {
                "tab": label,
                "content": panel.inner_text().strip() if panel.count() else "",
            }
        )

    faq_state = None
    first_question = page.locator('[data-slot="faq-question"]').first
    if first_question.count():
        first_question.click()
        page.wait_for_timeout(220)
        answer = page.locator('[data-slot="faq-answer"]').first
        faq_state = {
            "question": first_question.inner_text().strip(),
            "answer": answer.inner_text().strip() if answer.count() else "",
            "answerVisible": answer.is_visible() if answer.count() else False,
        }

    assets = page.evaluate(
        """() => ({
          images: [...document.images].map((image) => ({
            src: image.currentSrc || image.src,
            alt: image.alt,
            width: image.naturalWidth,
            height: image.naturalHeight,
          })),
          videos: [...document.querySelectorAll('video')].map((video) => ({
            src: video.currentSrc || video.src,
            poster: video.poster,
            autoplay: video.autoplay,
            loop: video.loop,
            muted: video.muted,
          })),
          sections: [...document.querySelectorAll('main section')].map((section) => ({
            component: section.getAttribute('data-component'),
            heading: section.querySelector('h1,h2,h3')?.textContent?.trim() || '',
          })),
          fonts: [...new Set([...document.querySelectorAll('h1,h3,p,a,button')]
            .map((element) => getComputedStyle(element).fontFamily))],
        })"""
    )
    title = page.title()
    context.close()
    return {
        "viewport": {"width": width, "height": height},
        "title": title,
        "styles": styles,
        "boxes": boxes,
        "scrollStates": scroll_states,
        "tabStates": tab_states,
        "faqState": faq_state,
        "assets": assets,
    }


with sync_playwright() as playwright:
    chrome = playwright.chromium.launch(channel="chrome", headless=True)
    result = {
        "source": URL,
        "viewports": [
            inspect_viewport(chrome, 1440, 1000),
            inspect_viewport(chrome, 768, 1024),
            inspect_viewport(chrome, 390, 844),
        ],
    }
    chrome.close()
    print(json.dumps(result, ensure_ascii=False, indent=2))
