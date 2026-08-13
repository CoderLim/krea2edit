from playwright.sync_api import sync_playwright


URL = "http://localhost:3010/"


def assert_no_horizontal_overflow(page):
    overflow = page.evaluate(
        "document.documentElement.scrollWidth - document.documentElement.clientWidth"
    )
    assert overflow <= 1, f"horizontal overflow: {overflow}px"


with sync_playwright() as playwright:
    browser = playwright.chromium.launch(channel="chrome", headless=True)

    for width, height in [(1440, 1000), (768, 1024), (390, 844)]:
        context = browser.new_context(
            viewport={"width": width, "height": height},
            locale="en-US",
            color_scheme="light",
        )
        page = context.new_page()
        page.goto(URL, wait_until="networkidle")
        assert_no_horizontal_overflow(page)

        page.locator("#install-tab-curl").click()
        command = page.locator("#install-command-panel code").inner_text()
        assert "scripts/install.sh" in command

        first_faq = page.locator('#faq [data-slot="accordion-trigger"]').first
        first_faq.click()
        assert first_faq.get_attribute("aria-expanded") == "true"

        if width == 390:
            menu = page.get_by_role("button", name="Open menu")
            menu.click()
            assert page.get_by_role("navigation").last.is_visible()

        context.close()

    browser.close()
    print("homepage QA passed at 1440px, 768px, and 390px")
