import { HiMiniChevronDown, HiMiniChevronUp } from 'react-icons/hi2';

export const homeMenuLinks = [
  {
    path: '/',
    label: 'Home',
    icon: null,
    icon2: null,
    dropdown: null,
  },
  {
    path: null,
    label: 'Who We Are',
    action: 'onMouseEnter',
    icon: <HiMiniChevronDown />,
    icon2: <HiMiniChevronUp />,
    dropdown: [
      { path: '/about-us', label: 'About us' },
      { path: '/about-us#history', label: "Moneda's History" },
      { path: '/our-impact', label: 'Our Impact' },
      { path: '/our-people', label: 'Our People' },
    ],
  },
  {
    path: '/focus-areas',
    label: 'Our Focus Areas',
    action: null,
    icon: null,
    icon2: null,
    dropdown: null,
  },
  {
    path: null,
    label: 'Our Ventures',
    action: 'onMouseEnter',
    icon: <HiMiniChevronDown />,
    icon2: <HiMiniChevronUp />,
    dropdown: [
      { path: '/domena', label: 'Domena' },
      { path: '/1952Africa', label: '1952 Africa' },
      { path: '/moneda-invest', label: 'Moneda Invest' },
      { path: '/moneda-capital', label: 'Moneda Capital' },
    ],
  },
  {
    path: '/news',
    label: 'News/Insights',
    icon: null,
    icon2: null,
    dropdown: null,
  },
  {
    path: '/contact',
    label: 'Contact us',
    icon: null,
    icon2: null,
    dropdown: null,
  },
];
