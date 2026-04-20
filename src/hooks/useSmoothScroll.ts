import { useCallback } from 'react';

type ScrollTarget = string | HTMLElement | null | undefined;

export function useSmoothScroll(defaultOffset = 0) {
  const scrollTo = useCallback(
    (idOrElement: ScrollTarget, offset = defaultOffset) => {
      if (!idOrElement) return;

      let el: Element | null = null;

      if (idOrElement instanceof HTMLElement) {
        el = idOrElement;
      } else {
        const id =
          typeof idOrElement === 'string' && idOrElement.startsWith('#')
            ? idOrElement.substring(1)
            : idOrElement;

        el = document.getElementById(id) || document.querySelector(`#${id}`);
      }

      if (!el) return;

      const rect = el.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const target = Math.max(0, rect.top + scrollTop - (offset || 0));

      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    },
    [defaultOffset]
  );

  return scrollTo;
}
