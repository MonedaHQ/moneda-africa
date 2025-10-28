import { useCallback } from 'react';

/**
 * Custom hook for smooth scrolling to a section by its ID.
 * Usage:
 * const scrollTo = useSmoothScroll();
 * scrollTo("about"); // scrolls to element with id="about"
 */
export function useSmoothScroll(defaultOffset = 0) {
  const scrollTo = useCallback(
    (idOrElement, offset = defaultOffset) => {
      if (!idOrElement) return;

      let el = null;

      // If a DOM element is passed directly
      if (idOrElement instanceof HTMLElement) {
        el = idOrElement;
      } else {
        // Normalize string - allow '#id' or 'id'
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
