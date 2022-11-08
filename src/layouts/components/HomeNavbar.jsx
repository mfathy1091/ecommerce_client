import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useMainContext } from '../../contexts/MainProvider'
import { RiFolderUserLine } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import useAuth from '../../hooks/useAuth'
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu';
import { NavLink } from 'react-router-dom'

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button type='button' onClick={customFunc}
      style={{ color }}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'
    >
      <span style={{ background: dotColor }}
        className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
      />
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const { currentUser } = useAuth();

  const { activeMenu, setActiveMenu,
    isClicked, setIsClicked, handleClick,
    screenSize, setScreenSize, currentColor } = useMainContext();
  
  // if screenSize was a dependency - this will be called every time the sreen size changes
  // , this would be very heavy
  // Instead leave it empty to be called once at first load time
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)
    // call handleResize each time the screen resizes
    window.addEventListener('resize', handleResize)
    // call handleResize on first load
    handleResize()
    // release the listener
    return () => window.removeEventListener('resize', handleResize) 
  }, [])

  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }
  }, [screenSize])

  return (
    <div className='flex justify-between pt-1 px-4 relative bg-white'>
      <NavLink
        to={'admin'}
      >
  
        <span className='capitalize'>Admin</span>
      </NavLink>
      <div className='flex items-center'>

        {/* <TooltipComponent
          content="profile"
          position = "BottomCenter"
        >
          <div 
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={() => handleClick('userProfile')}
          >
            <img
              src={currentUser.avatar}
              alt='avatar-picture'
              className='h-7 w-7 rounded-full'
            />
            <p>
              <span className='text-gray-400'>Hi, </span> {' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>{currentUser.name}</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400' />
          </div>
        </TooltipComponent> */}

        <DropDownMenu />

        {/* {isClicked.userProfile && <DropDownMenu />} */}
        
        
        {/* {isClicked.cart && <Cart />}
        <NavButton
          title="Cart"
          customFunc={() => handleClick('cart')}
          color={currentColor}
          icon={<AiOutlineMenu />}
        /> */}


      </div>
    </div>
  )
}

export default Navbar