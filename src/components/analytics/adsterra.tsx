import { useEffect, useRef, useState } from 'react';

import { usePathname } from '@/core/i18n/navigation';
import { cn } from '@/lib/utils';

/** Hardcoded Adsterra units for krea2edit.app — not admin-configurable. */
const POPUNDER_SRC = 'https://abscloud.org/1/b98357055ccfe1756bafc298d9765f3d';
const SOCIAL_BAR_SRC = 'https://bauval.org/14/961faf48063a1a31e03243612bb466f1';
const NATIVE_SRC = 'https://bauval.org/21/9d95f1ff24236b1b0af82301d7e61a78';
const NATIVE_CONTAINER_ID = 'container-9d95f1ff24236b1b0af82301d7e61a78';

const BANNER_300 = {
  key: 'e4357acf8b71d6d1f896f391325324be',
  width: 300,
  height: 250,
} as const;
const BANNER_728 = {
  key: '40f9b485943259ca10d8e9a398540161',
  width: 728,
  height: 90,
} as const;
const BANNER_320 = {
  key: '98823c0cf4212f0e913ec8e5645715f5',
  width: 320,
  height: 50,
} as const;

const PRIVATE_PREFIXES = [
  '/admin',
  '/settings',
  '/sign-in',
  '/sign-up',
  '/forgot-password',
  '/reset-password',
  '/verify-email',
  '/redeem-invite',
];

function isPrivatePath(pathname: string) {
  return PRIVATE_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );
}

function ensureExternalScript(id: string, src: string) {
  if (document.getElementById(id)) return;
  const s = document.createElement('script');
  s.id = id;
  s.async = true;
  s.dataset.cfasync = 'false';
  s.src = src;
  document.body.appendChild(s);
}

/** Serialize atOptions banner loads so concurrent mounts don't race. */
let bannerQueue: Promise<void> = Promise.resolve();

function enqueueBannerLoad(run: () => void) {
  bannerQueue = bannerQueue.then(() => {
    run();
    // Give the invoke script a tick to read atOptions before the next unit.
    return new Promise<void>((resolve) => setTimeout(resolve, 50));
  });
  return bannerQueue;
}

declare global {
  interface Window {
    atOptions?: {
      key: string;
      format: string;
      height: number;
      width: number;
      params: Record<string, never>;
    };
  }
}

/**
 * Popunder + Social Bar — sitewide on public pages only.
 * Mount once from the root layout.
 */
export function AdsterraSitewide() {
  const pathname = usePathname();

  useEffect(() => {
    if (isPrivatePath(pathname)) return;
    ensureExternalScript('adsterra-popunder', POPUNDER_SRC);
    ensureExternalScript('adsterra-social-bar', SOCIAL_BAR_SRC);
  }, [pathname]);

  return null;
}

/** Native Banner — place the container in page content. */
export function AdsterraNativeBanner({ className }: { className?: string }) {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    ensureExternalScript('adsterra-native', NATIVE_SRC);
  }, []);

  return (
    <div
      className={cn('flex w-full justify-center overflow-hidden', className)}
    >
      <div id={NATIVE_CONTAINER_ID} />
    </div>
  );
}

type BannerSpec = {
  key: string;
  width: number;
  height: number;
};

function AdsterraBannerUnit({
  banner,
  className,
}: {
  banner: BannerSpec;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.dataset.adsterraLoaded === '1') return;
    el.dataset.adsterraLoaded = '1';

    enqueueBannerLoad(() => {
      window.atOptions = {
        key: banner.key,
        format: 'iframe',
        height: banner.height,
        width: banner.width,
        params: {},
      };
      const s = document.createElement('script');
      s.src = `https://bauval.org/22/${banner.key}`;
      s.async = false;
      el.appendChild(s);
    });
  }, [banner.key, banner.height, banner.width]);

  return (
    <div
      ref={ref}
      className={cn('mx-auto overflow-hidden', className)}
      style={{ minWidth: banner.width, minHeight: banner.height }}
    />
  );
}

/** 300×250 medium rectangle. */
export function AdsterraBanner300({ className }: { className?: string }) {
  return <AdsterraBannerUnit banner={BANNER_300} className={className} />;
}

/** Desktop 728×90. */
export function AdsterraBanner728({ className }: { className?: string }) {
  return <AdsterraBannerUnit banner={BANNER_728} className={className} />;
}

/** Mobile 320×50. */
export function AdsterraBanner320({ className }: { className?: string }) {
  return <AdsterraBannerUnit banner={BANNER_320} className={className} />;
}

/** Responsive leaderboard: mounts only the size that matches the viewport. */
export function AdsterraLeaderboard({ className }: { className?: string }) {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  if (isDesktop === null) {
    return (
      <div
        className={cn('flex w-full justify-center', className)}
        style={{ minHeight: 50 }}
        aria-hidden
      />
    );
  }

  return (
    <div className={cn('flex w-full justify-center', className)}>
      {isDesktop ? <AdsterraBanner728 /> : <AdsterraBanner320 />}
    </div>
  );
}
