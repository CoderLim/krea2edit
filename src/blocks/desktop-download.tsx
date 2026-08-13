import { ArrowUpRight, Download, ShieldCheck } from 'lucide-react';

import { m } from '@/paraglide/messages.js';

const RELEASE_VERSION = '0.1.0';
const RELEASE_URL = `https://github.com/thinkany-ai/dscode/releases/tag/desktop-v${RELEASE_VERSION}`;
const RELEASE_ASSET_URL = `https://github.com/thinkany-ai/dscode/releases/download/desktop-v${RELEASE_VERSION}`;

const artifacts = [
  {
    platform: 'macOS',
    architecture: 'Apple Silicon',
    format: 'DMG',
    fileName: `DSCode_${RELEASE_VERSION}_arm64.dmg`,
  },
  {
    platform: 'macOS',
    architecture: 'Intel',
    format: 'DMG',
    fileName: `DSCode_${RELEASE_VERSION}_x64.dmg`,
  },
  {
    platform: 'Windows',
    architecture: 'x64',
    format: 'EXE',
    fileName: `DSCode_${RELEASE_VERSION}_x64-setup.exe`,
  },
  {
    platform: 'Debian / Ubuntu',
    architecture: 'x64',
    format: 'DEB',
    fileName: `DSCode_${RELEASE_VERSION}_amd64.deb`,
  },
  {
    platform: 'Fedora / RHEL',
    architecture: 'x64',
    format: 'RPM',
    fileName: `DSCode_${RELEASE_VERSION}_x86_64.rpm`,
  },
] as const;

export function DesktopDownload() {
  return (
    <section
      id="download"
      className="border-border scroll-mt-20 border-y px-5 py-12 sm:px-8 lg:py-16"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(32rem,1.2fr)] lg:gap-16">
        <div>
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] font-semibold tracking-[0.12em] uppercase">
            <span className="bg-brand-soft text-brand-soft-foreground rounded-[3px] px-2 py-1">
              {m['landing.download.badge']({ version: RELEASE_VERSION })}
            </span>
            <span className="text-muted-foreground">
              {m['landing.download.release_status']()}
            </span>
          </div>

          <h2 className="mt-5 max-w-lg font-mono text-xl leading-8 font-bold tracking-[-0.02em] md:text-2xl md:leading-9">
            {m['landing.download.title']()}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-[15px] leading-8">
            {m['landing.download.description']()}
          </p>

          <div className="mt-6 flex items-start gap-3 text-sm leading-6">
            <ShieldCheck
              className="text-brand mt-0.5 size-4 shrink-0"
              aria-hidden="true"
            />
            <p className="text-muted-foreground">
              {m['landing.download.signing']()}
            </p>
          </div>

          <a
            href={RELEASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground focus-visible:ring-ring mt-6 inline-flex min-h-10 items-center gap-2 font-mono text-sm font-semibold underline underline-offset-4 outline-none hover:no-underline focus-visible:ring-2"
          >
            {m['landing.download.release_notes']()}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="border-border divide-border divide-y border-y">
          {artifacts.map((artifact) => (
            <a
              key={artifact.fileName}
              href={`${RELEASE_ASSET_URL}/${artifact.fileName}`}
              className="hover:bg-muted focus-visible:bg-muted focus-visible:ring-ring group grid min-h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1 px-3 py-3 transition-colors outline-none focus-visible:ring-2 sm:grid-cols-[minmax(0,1fr)_8rem_3rem] sm:px-4"
            >
              <span className="min-w-0">
                <span className="block font-mono text-sm font-semibold">
                  {artifact.platform}
                </span>
                <span className="text-muted-foreground mt-1 block truncate font-mono text-[11px]">
                  {artifact.fileName}
                </span>
              </span>
              <span className="text-muted-foreground hidden font-mono text-xs sm:block">
                {artifact.architecture} · {artifact.format}
              </span>
              <span className="border-border group-hover:border-brand group-hover:text-brand inline-flex size-10 items-center justify-center rounded-[4px] border transition-colors">
                <Download className="size-4" aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
