import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Admin Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Animals',
    icon: 'lock-outline',
    children: [
      {
        title: 'Cows',
        link: '/auth/login',
      },
      {
        title: 'Pigs',
        link: '/auth/register',
      },
      {
        title: 'Sheep',
        link: '/auth/request-password',
      },
    ],
  },
  {
    title: 'Plants',
    icon: 'lock-outline',
    children: [
      {
        title: 'Flowers',
        link: '/auth/login',
      },
      {
        title: 'Avocados',
        link: '/auth/register',
      },
      {
        title: 'Oranges',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
