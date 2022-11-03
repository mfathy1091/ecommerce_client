import { FiFolder,  } from 'react-icons/fi';
import { MdOutlinePersonSearch } from 'react-icons/md';

export const sidebarLinks = [
  {
    title: 'PSS',
    links: [
      {
        name: 'users',
        path: 'admin/users',
        icon: <FiFolder />,
      },
      {
        name: 'Products',
        path: 'products',
        icon: <MdOutlinePersonSearch />,
      },
      {
        name: 'Beneficiaries',
        path: 'beneficiaries',
        icon: <MdOutlinePersonSearch />,
      },
      {
        name: 'PS Cases',
        path: 'ps-cases',
        icon: <FiFolder />,
      },
      {
        name: 'Add Service',
        path: 'services/add',
        icon: <FiFolder />,
      },
    ],
  },
  
];

