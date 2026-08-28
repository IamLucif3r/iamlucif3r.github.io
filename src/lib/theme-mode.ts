'use client';

import { useEffect, useState } from 'react';

export type ThemeMode = 'platform' | 'research';

function getStorage(): Storage | null {
  if (typeof window === 'undefined') return null;

  try {
    const storage = window.localStorage;
    const probe = '__theme_check__';
    storage.setItem(probe, probe);
    storage.removeItem(probe);
    return storage;
  } catch {
    return null;
  }
}

function readMode(): ThemeMode {
  if (typeof document === 'undefined') return 'platform';

  const storage = getStorage();
  const storedMode = storage ? storage.getItem('site-mode') : null;
  const storedTheme = storage ? storage.getItem('theme') : null;

  return document.documentElement.classList.contains('dark') || storedMode === 'research' || storedTheme === 'dark'
    ? 'research'
    : 'platform';
}

export function useThemeMode() {
  const [mode, setMode] = useState<ThemeMode>('platform');

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setMode(readMode());

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  function setThemeMode(nextMode: ThemeMode) {
    const research = nextMode === 'research';
    const root = document.documentElement;
    root.classList.toggle('dark', research);
    root.dataset.mode = nextMode;
    setMode(nextMode);

    const storage = getStorage();
    if (!storage) return;

    try {
      storage.setItem('theme', research ? 'dark' : 'light');
      storage.setItem('site-mode', nextMode);
    } catch {
      // Storage may be unavailable; the current session still updates.
    }
  }

  return { mode, isResearch: mode === 'research', setThemeMode };
}
