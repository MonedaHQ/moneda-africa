export function truncateString(str, num = 10) {
  const words = str.split(' ');

  if (words.length <= num) {
    return str;
  }

  return words.slice(0, num).join(' ') + '...';
}
