// CSS module declarations
declare module '*.module.css' {
  const classes: Record<string, string>;
  export default classes;
}

// Global CSS side-effect imports
declare module '*.css';

// Static asset declarations
declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

// Microsoft Clarity custom tagging API
interface Window {
  clarity?: (method: string, ...args: string[]) => void;
}
