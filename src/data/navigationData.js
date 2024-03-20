import {
  PiFacebookLogoFill,
  PiInstagramLogoFill,
  PiLinkedinLogoFill,
} from 'react-icons/pi';
import { RiTwitterXFill } from 'react-icons/ri';

export const navLinks = [
  { label: 'Moneda Invest', path: 'https://www.monedainvest.com/' },
  { label: 'Moneda Capital', path: '' },
  // { label: '1952 Africa', path: 'https://1952africa.art/' },
];

export const socialLinks = [
  {
    icon: <PiFacebookLogoFill />,
    path: 'https://www.facebook.com/MonedaInvest',
  },
  {
    icon: <PiInstagramLogoFill />,
    path: 'https://www.instagram.com/monedainvest/',
  },
  { icon: <RiTwitterXFill />, path: 'https://www.twitter.com/MonedaInvest' },
  {
    icon: <PiLinkedinLogoFill />,
    path: 'https://www.linkedin.com/company/moneda-invest/mycompany/',
  },
];
