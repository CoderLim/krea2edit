import { parseLocalizedItems } from '@/lib/marketing-content';
import { m } from '@/paraglide/messages.js';
import { localizeHref } from '@/paraglide/runtime.js';
import { ExplorePages } from '@/components/marketing/marketing-primitives';

export function ExplorePageLinks() {
  const paths = [
    '/identity-edit',
    '/guide',
    '/image-editor',
    '/no-comfyui',
    '/vs-krea',
  ];
  const items = parseLocalizedItems(m['home.explore.items']()).map(
    (item, index) => ({
      href: localizeHref(paths[index]!),
      ...item,
    })
  );
  return (
    <ExplorePages
      title={m['home.explore.title']()}
      intro={m['home.explore.intro']()}
      items={items}
    />
  );
}
