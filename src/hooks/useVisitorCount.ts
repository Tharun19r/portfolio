import { useEffect, useState } from 'react';

// Free public counter (no account): https://abacus.jasoncameron.dev
const COUNTER = 'https://abacus.jasoncameron.dev';
const KEY = 'tharun19r-portfolio/visitors';
const COUNTED_FLAG = 'tharun-series-counted';

/**
 * Unique-visitor count: each browser adds one the first time it visits, later visits only read.
 * Local dev never adds. Returns null until loaded, or if the counter can't be reached.
 */
export function useVisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let counted = true;
    try {
      counted = localStorage.getItem(COUNTED_FLAG) === '1';
    } catch {
      /* storage blocked — read only, so private windows don't inflate the count */
    }
    const hit = !counted && import.meta.env.PROD;
    const ctrl = new AbortController();

    fetch(`${COUNTER}/${hit ? 'hit' : 'get'}/${KEY}`, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((d: { value?: number } | null) => {
        if (typeof d?.value !== 'number') return;
        setCount(d.value);
        if (hit) {
          try {
            localStorage.setItem(COUNTED_FLAG, '1');
          } catch {
            /* ignore */
          }
        }
      })
      .catch(() => {
        /* counter unreachable — the footer simply hides the count */
      });

    return () => ctrl.abort();
  }, []);

  return count;
}
