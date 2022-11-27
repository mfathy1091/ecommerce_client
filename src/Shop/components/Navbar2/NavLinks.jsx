import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = () => {
  const links = [
    {
      name: 'Men', submenu: true,
      sublinks: [
        {
          head: 'TopWear',
          sublink: [
            { name: 'T-shirt', link: '/' },
            { name: 'Casual Shirts', link: '/' },
            { name: 'Formal Shirts', link: '/' },
            { name: 'T-shirt', link: '/' },
          ]
        }
      ]
    },
    { name: 'Sunglasses' },

  ]
  return <>
    {
      links.map(link => (
        <div>
          <div className='px-3 text-left md:cursor-pointer'>
            <h1 className='py-7'>{link.name}</h1>
            {link.submenu && (
              <div>
                <div className='absolute top-20'>
                  <div className='py-3'>
                    <div className='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45'></div>
                  </div>
                  <div className='bg-white p-3.5'>
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <h1 className='text-lg font-semibold'>{mysublinks.head}</h1>
                        {mysublinks.sublink.map((slink) => (
                          <li className='text-sm text-gray-600 my-2.5'>
                            <Link to={slink.link} className='hover:text-primary'>{slink.name}</Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
            }
          </div>
        </div>
      ))
    }
  </>
}

export default NavLinks