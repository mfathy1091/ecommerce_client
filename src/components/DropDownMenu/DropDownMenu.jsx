import './dropDownMenu.css'
import useAuth from '../../hooks/useAuth'
import { BiUserCircle, BiLogOut } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import useLogout from '../../hooks/useLogout';
import { useNavigate } from 'react-router-dom';
import { useMainContext } from '../../contexts/MainProvider'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import Button from '../Button/Button';

const DropDownMenu = () => {
  const { activeMenu, setActiveMenu,
    isClicked, setIsClicked, handleClick,
    screenSize, setScreenSize, currentColor } = useMainContext();

  const { currentUser } = useAuth();
  const logout = useLogout();
  const navigate = useNavigate();


  const handleLogout = async() => {
    await logout();
    navigate('/login');
  } 


  const [open, setOpen] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  const links = [
    {
      title: 'My Profile',
      path: '/profile',
      icon: <BiUserCircle />,
    },
  ]


  return (
    <div ref={menuRef}>
      <TooltipComponent
        content="profile"
        position = "BottomCenter"
      >
        <div 
          className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
          onClick={() => setOpen(!open)}
        >
          <img
            src={currentUser.avatar}
            alt='avatar-picture'
            className='h-7 w-7 rounded-full'
          />
          <p>
            <span className='text-gray-400'>Hi, </span> {' '}
            <span className='text-gray-400 font-bold ml-1 text-14'>{currentUser?.fullName?.split(' ')[0]}</span>
          </p>
          <MdKeyboardArrowDown className='text-gray-400' />
        </div>
      </TooltipComponent>

      <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
        <h3 className='username'>
          {currentUser.name}<br/>
          <span className='role'>{currentUser.role}</span></h3>

          {links.map((item, idx) => (
            <NavLink 
              className="dropdown-item"
              to={ item.path }
              key={idx}
            >
              <span>{ item.icon }</span>
              <p>{ item.title }</p>
            </NavLink>
          ))}

          <hr className='my-2' />


          <Button 
            onClick={handleLogout}
            className='btn btn-primary btn-md btn-block'
          >
            <BiLogOut /> Logout
          </Button>

      </div>
    </div>
  )
}

const DropdownItem = (props) => {

}

export default DropDownMenu;