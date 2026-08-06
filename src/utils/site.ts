export const SITE_URL = 'https://www.moneda.africa';
export const SITE_NAME = 'Moneda Invest Africa';

export function absoluteUrl(pathOrUrl = '') {
  if (!pathOrUrl) return SITE_URL;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`;
}

