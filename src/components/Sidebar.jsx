import React, { useContext } from 'react';
import { Link, NavLink, useNavigate} from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel, MdLogout } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import AuthContext from '../contexts/AuthProvider';
import { useMainContext } from '../contexts/MainProvider';
import styled from 'styled-components';



const Sidebar = ({links}) => {

  const navigate = useNavigate();
  const { activeMenu, setActiveMenu, screenSize, currentColor } = useMainContext();
  const authContext = useContext(AuthContext);
  const isLoggedIn = authContext.isLoggedIn; 
  
  // for mobile devices ONLY,
  // the sidebar is closed by default,
  // if opened, close it when clicking to a Link / Navlink
  // as you want to go to another page with closed sidebar
  const handleCloseSidebar = () => {
    if(activeMenu && screenSize <=900) {
      setActiveMenu(false)
    }
  }

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-sm text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-sm text-gray-700 text-md dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'
  return (
    <div className=' h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
        <div className='flex justify-between items-center'>
          <Link to="/" onClick={ handleCloseSidebar }
            className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
          >
            <SiShopware /> <span>Admin</span>
          </Link>
          <TooltipComponent content="Menue"  position='BottomCenter'>
            <button type='button' onClick={ () => setActiveMenu(
              (prevActiveMenu) => !prevActiveMenu )}
            className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block"
            >
            <MdOutlineCancel></MdOutlineCancel></button>
          </TooltipComponent>
        </div>
        
        <div className="mt-10">
          {links.map((item) => (
            <div key={item.title}>
              <p className="text-gray-900 m-3 mt-4 uppercase dark:text-gray-500">{item.title}</p>
              {item.links.map((link) => (
                <NavLink
                  to={`/${link.path}`} key={link.name}
                  onClick={ handleCloseSidebar }
                  style={ ({isActive}) => ({
                    backgroundColor: 
                    isActive ? currentColor : ''
                  })}
                  className={({ isActive }) => isActive ? activeLink : normalLink }
                >
                  { link.icon }
                  <span className='capitalize'>
                    {link.name}
                  </span>
                </NavLink>
              ))}
            </div>
          ))}
          
        </div>
      </>)}
    </div>
  )
}

export default Sidebar