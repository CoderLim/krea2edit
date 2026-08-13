import { useEffect, useRef, useState } from 'react';
import { Check, Copy } from 'lucide-react';

import { cn } from '@/lib/utils';

type InstallMethod = 'npm' | 'curl';

const commands: Record<InstallMethod, string> = {
  npm: 'npm install -g @thinkany/dscode',
  curl: 'curl -fsSL https://raw.githubusercontent.com/thinkany-ai/dscode/refs/heads/main/scripts/install.sh | sh',
};

/** Compact, keyboard-accessible installer used by the landing hero. */
export function InstallCommand({
  copyLabel,
  copiedLabel,
  title,
  hint,
  followUpLabel,
  followUpCommand,
  installAlt,
  installAltCommand,
  className,
}: {
  copyLabel: string;
  copiedLabel: string;
  title: string;
  hint: string;
  followUpLabel: string;
  followUpCommand: string;
  installAlt: string;
  installAltCommand: string;
  className?: string;
}) {
  const [activeMethod, setActiveMethod] = useState<InstallMethod>('npm');
  const [copied, setCopied] = useState(false);
  const copiedTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const command = commands[activeMethod];

  useEffect(
    () => () => {
      if (copiedTimer.current) clearTimeout(copiedTimer.current);
    },
    []
  );

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      if (copiedTimer.current) clearTimeout(copiedTimer.current);
      copiedTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can be unavailable in non-secure contexts.
    }
  };

  return (
    <div className={cn('w-full text-left', className)}>
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-xs">
        <p className="text-foreground font-mono font-semibold">{title}</p>
        <p className="text-muted-foreground">{hint}</p>
      </div>

      <div
        role="tablist"
        aria-label={title}
        className="border-border bg-muted flex gap-10 overflow-x-auto rounded-t-[6px] border px-4"
      >
        {(['npm', 'curl'] as const).map((method) => (
          <button
            key={method}
            id={`install-tab-${method}`}
            type="button"
            role="tab"
            aria-controls="install-command-panel"
            aria-selected={activeMethod === method}
            aria-label={
              method === 'curl' ? `${installAlt} ${installAltCommand}` : method
            }
            tabIndex={activeMethod === method ? 0 : -1}
            onClick={() => {
              setActiveMethod(method);
              setCopied(false);
            }}
            onKeyDown={(event) => {
              if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
                return;
              }

              event.preventDefault();
              const nextMethod: InstallMethod =
                activeMethod === 'npm' ? 'curl' : 'npm';
              setActiveMethod(nextMethod);
              setCopied(false);
              document.getElementById(`install-tab-${nextMethod}`)?.focus();
            }}
            className={cn(
              'focus-visible:ring-ring focus-visible:ring-offset-background relative shrink-0 py-4 font-mono text-xs font-semibold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
              activeMethod === method
                ? 'text-foreground after:bg-brand after:absolute after:right-0 after:bottom-0 after:left-0 after:h-0.5'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {method}
          </button>
        ))}
      </div>

      <div
        id="install-command-panel"
        role="tabpanel"
        aria-labelledby={`install-tab-${activeMethod}`}
        className="border-border bg-muted flex min-w-0 items-center gap-3 rounded-b-[6px] border border-t-0 p-4"
      >
        <div className="min-w-0 flex-1 overflow-x-auto">
          <code
            key={activeMethod}
            className="animate-in fade-in block font-mono text-[13px] whitespace-nowrap duration-[180ms] sm:text-sm"
          >
            <span aria-hidden className="text-muted-foreground select-none">
              $&nbsp;
            </span>
            {command}
          </code>
        </div>
        <button
          type="button"
          onClick={copy}
          aria-label={copied ? copiedLabel : copyLabel}
          className="text-muted-foreground hover:bg-background hover:text-foreground focus-visible:ring-ring focus-visible:ring-offset-muted inline-flex shrink-0 items-center gap-2 rounded-[4px] p-2 font-mono text-xs transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          {copied ? (
            <Check aria-hidden className="size-3.5" />
          ) : (
            <Copy aria-hidden className="size-3.5" />
          )}
          <span className="hidden sm:inline" aria-live="polite">
            {copied ? copiedLabel : copyLabel}
          </span>
        </button>
      </div>

      <p className="text-muted-foreground mt-3 text-xs">
        {followUpLabel}{' '}
        <code className="text-foreground font-mono">{followUpCommand}</code>
      </p>
    </div>
  );
}
