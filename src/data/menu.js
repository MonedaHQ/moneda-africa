import { HiMiniChevronDown, HiMiniChevronUp } from 'react-icons/hi2';

export const homeMenuLinks = [
  {
    path: null,
    label: 'Who We Are',
    action: 'onMouseEnter',
    icon: <HiMiniChevronDown />,
    icon2: <HiMiniChevronUp />,
    dropdown: [
      { path: '/about-us', label: 'About us' },
      // { path: '/about-us#history', label: "Moneda's History" },
      // { path: '/our-impact', label: 'Our Impact' },
      { path: '/our-people', label: 'Our People' },
    ],
  },
  {
    path: '/our-impact',
    label: 'Our Impact',
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
    label: 'News',
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
