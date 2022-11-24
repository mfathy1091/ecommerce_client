import { BiCategory,  } from 'react-icons/bi';
import { MdOutlineEditAttributes, MdOutlineSecurity } from 'react-icons/md';

import { FaUserFriends } from 'react-icons/fa';


export const sidebarLinks = [
  {
    title: 'Users',
    links: [
      {
        name: 'users',
        path: 'admin/user/list',
        icon: <FaUserFriends />,
      },
      {
        name: 'roles',
        path: 'admin/role/list',
        icon: <MdOutlineSecurity />,
      },
    ]
  },
  {
    title: 'Shop',
    links: [
      {
        name: 'Categories',
        path: 'admin/category/list',
        icon: <BiCategory />,
      },
      {
        name: 'attributes',
        path: 'admin/attribute/list',
        icon: <BiCategory />,
      },
      {
        name: 'brands',
        path: 'admin/brand/list',
        icon: <BiCategory />,
      },
      {
        name: 'Products',
        path: 'admin/product/list',
        icon: <BiCategory />,
      },
      {
        name: 'Eyeglasses',
        path: 'admin/eyeglasses/list',
        icon: <BiCategory />,
      },
    ]
  },
  
];

