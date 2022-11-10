import { FiFolder,  } from 'react-icons/fi';
import { MdOutlinePersonSearch } from 'react-icons/md';

export const sidebarLinks = [
  {
    title: 'Users',
    links: [
      {
        name: 'users',
        path: 'users',
        icon: <FiFolder />,
      },
      {
        name: 'roles',
        path: 'roles',
        icon: <FiFolder />,
      },
    ]
  },
  {
    title: 'Products',
    links: [
      {
        name: 'Products',
        path: 'products',
        icon: <FiFolder />,
      },
      {
        name: 'attributes',
        path: 'attributes',
        icon: <FiFolder />,
      },
    ]
  },
  
];

