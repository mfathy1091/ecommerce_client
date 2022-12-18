import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import links from './links'
import { FaChevronRight } from 'react-icons/fa'
import styled from 'styled-components'



const Container = styled.div`
  display: flex;


  @media(max-width: 768px) {
    /* position: relative;
    float: left; */
    flex-direction: column;
    width: 100%;
    height: 100vh;
  }
`

const MenuHead = styled.h1`
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`


const ListSubItem = styled.li`
list-style-type: none;
  padding: 10px;
  :hover {
    color: rgb(74 58 255)
  }


  @media(max-width: 768px) {
    position: relative;
    white-space: nowrap;
    width: 100%;
  }
  `

const NavLinks = () => {
  const [heading, setHeading] = useState('')
  const [subHeading, setSubHeading] = useState('')
  return (
    <Container>
      <ListSubItem>
        <Link to="/" className='uppercase inline-block' >
          Home
        </Link>
      </ListSubItem>
      {
        links.map(link => (
          <div>
            <div className='text-left md:cursor-pointer group'>
              <MenuHead className='group'
                onClick={() => {
                  heading !== link.name ? setHeading(link.name) : setHeading('');
                  setSubHeading('');
                }}
              >
                {link.name}
                {/* mobile - click */}
                <span className={`text-2xl md:hidden inline ease-in duration-200 ${heading === link.name ? 'rotate-90 bg-slate-200 rounded-full' : ''}`}>
                  <FaChevronRight className='p-1.5' />
                </span>
                {/* large - hover */}
                <span className={`text-2xl   md:block hidden ease-in duration-200 group-hover:rotate-90`}>
                  <FaChevronRight className='p-1.5' />
                </span>
              </MenuHead>
              {/* large menu */}
              {link.submenu && (
                <div>
                  <div className='absolute top-17 hidden group-hover:md:block hover:md:block'>
                    <div className='py-3'>
                      <div className='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45'></div>
                    </div>
                    <div className='bg-white p-5 grid grid-cols-3 gap-10'>
                      {link.sublinks.map((mysublinks) => (
                        <div>
                          <MenuHead>{mysublinks.head}</MenuHead>
                          {mysublinks.sublink.map((slink) => (
                            <ListSubItem>
                              <Link to={slink.link}>{slink.name}</Link>
                            </ListSubItem>
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
                        <span className={`text-2xl md:mt-1 md:ml-2 inline ease-in duration-150 rounded-full ${subHeading === slinks.head ? 'rotate-90 bg-slate-200' : ''}`}>
                          <FaChevronRight className='p-1.5' />
                        </span>
                      </h1>
                      <div className={`${subHeading === slinks.head ? "md:hidden" : "hidden"} pl-7 border-l-1`}>
                        {slinks.sublink.map(slink => (
                          <ListSubItem>
                            <Link to={slink.link} className={''}>
                              {slink.name}
                            </Link>
                          </ListSubItem>
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
    </Container>
  )

}

export default NavLinks