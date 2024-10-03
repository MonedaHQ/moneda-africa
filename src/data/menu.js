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
    path: '/verticals',
    label: 'Our Verticals',
    action: null,
    icon: null,
    icon2: null,
    dropdown: null,
  },
  {
    path: '/ventures',
    label: 'Our Ventures',
    action: null,
    icon: null,
    icon2: null,
    dropdown: null,
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
