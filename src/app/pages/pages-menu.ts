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
    ],
  },
  {
    title: 'Plants',
    icon: 'sun-outline',
    children: [
      {
        title: 'Flowers',
        link: '/pages/dashboard/flowers',
      },
    ],
  },
];
