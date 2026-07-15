import { useEffect } from 'react';
import { useRouterState } from '@tanstack/react-router';

/**
 * ShipAny Code preview bridge — when this app runs inside the sandbox
 * preview iframe, report route changes to the parent window so its URL bar
 * can follow along. A no-op outside an iframe, so production deployments
 * are unaffected.
 */
export function SandboxPreviewBridge() {
  const href = useRouterState({ select: (s) => s.location.href });

  useEffect(() => {
    if (typeof window === 'undefined' || window.self === window.top) return;
    try {
      window.parent.postMessage(
        { type: 'shipany-preview:navigate', path: href },
        '*'
      );
    } catch {
      // Cross-origin parent that refuses messages — ignore.
    }
  }, [href]);

  return null;
}
