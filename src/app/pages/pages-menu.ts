import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'General Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Animals',
    icon: 'github-outline',
    children: [
      {
        title: 'Cows',
        link: '/pages/dashboard/cows',
      },
      {
        title: 'Pigs',
        link: '/pages/dashboard/pigs',
      },
      {
        title: 'Sheeps',
        link: '/pages/dashboard/sheeps',
      },
    ],
  },
  {
    title: 'Plants',
    icon: 'sun-outline',
    children: [
      {
        title: 'Flowers',
        link: '/pages/flowers',
      },
      {
        title: 'Avocados',
        link: '/pages/avocados',
      },
      {
        title: 'Oranges',
        link: '/auth/request-password',
      },
    ],
  },
];
