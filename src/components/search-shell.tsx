'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    PagefindUI?: new (options: { element: string; showSubResults: boolean; resetStyles: boolean }) => unknown;
  }
}

export function SearchShell() {
  useEffect(() => {
    const scriptId = 'pagefind-script';
    if (document.getElementById(scriptId)) {
      if (window.PagefindUI) {
        // eslint-disable-next-line no-new
        new window.PagefindUI({
          element: '#search',
          showSubResults: true,
          resetStyles: false
        });
      }
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = '/pagefind/pagefind-ui.js';
    script.async = true;
    script.onload = () => {
      if (window.PagefindUI) {
        // eslint-disable-next-line no-new
        new window.PagefindUI({
          element: '#search',
          showSubResults: true,
          resetStyles: false
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return <div id="search" className="search-shell" />;
}
