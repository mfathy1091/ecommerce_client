import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import links from './links'

import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const NavLinks = () => {
  const [heading, setHeading] = useState('')
  const [subHeading, setSubHeading] = useState('')
  return (
    <>
      {
        links.map(link => (
          <div>
            <div className='px-3 text-left md:cursor-pointer group'>
              <h1 className='uppercase py-7 flex justify-between items-center md:pr-0 pr-5 group bg-slate-100'
                onClick={() => {
                  heading !== link.name ? setHeading(link.name) : setHeading('');
                  setSubHeading('');
                }}
              >
                {link.name}
                {/* mobile - click */}
                <span className={`text-2xl md:hidden inline ease-in duration-150 ${heading === link.name ? 'rotate-180 bg-slate-200 rounded-full' : ''}` }>
                  <FaChevronDown className='p-1.5' />
                </span>
                {/* large - hover */}
                <span className={`text-2xl  md:ml-2 md:block hidden ease-in duration-150 group-hover:rotate-180`}>
                  <FaChevronDown className='p-1.5' />
                </span>
              </h1>
              {/* large menu */}
              {link.submenu && (
                <div>
                  <div className='absolute top-20 hidden group-hover:md:block hover:md:block'>
                    <div className='py-3'>
                      <div className='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45'></div>
                    </div>
                    <div className='bg-white p-5 grid grid-cols-3 gap-10'>
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
            
            {/* Mobile menus */}
            <div className={`${heading === link.name ? 'md:hidden' : 'hidden'} mx-3 border-l-1`}>
              {/* sublinks */}
              {link.submenu && (
                link.sublinks.map((slinks) => (
                  <div>
                    <div className='mx-7'>
                      <h1
                        onClick={() => subHeading !== slinks.head ? setSubHeading(slinks.head) : setSubHeading('')}
                        className='py-4 md:pr-0 flex justify-between items-center'
                      >
                        {slinks.head}
                        <span className={`text-2xl md:mt-1 md:ml-2 inline ease-in duration-150 rounded-full ${subHeading === slinks.head ? 'rotate-180 bg-slate-200' : ''}`}>
                          <FaChevronDown className='p-1.5' />
                        </span>
                      </h1>
                      <div className={`${subHeading === slinks.head ? "md:hidden" : "hidden"} pl-7 border-l-1`}>
                        {slinks.sublink.map(slink => (
                          <li className='py-3'>
                            <Link to={slink.link} className={''}>
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              )
              }
              
            </div>
          </div>
          
        ))
      }
    </>
  )

}

export default NavLinks