
import { FiFolder } from 'react-icons/fi';
import { MdOutlinePersonSearch, MdAdminPanelSettings, MdOutlineAdminPanelSettings } from 'react-icons/md';

export const sidebarLinks = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'Dashboard',
        path: 'dashboard',
        icon: <MdOutlineAdminPanelSettings />,
      },
    ]
  },
  {
    title: 'PSS',
    links: [
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
  {
    title: 'ADMIN',
    links: [
      {
        name: 'Admin',
        path: 'admin',
        icon: <MdOutlineAdminPanelSettings />,
      },
    ]
  },

  
];

