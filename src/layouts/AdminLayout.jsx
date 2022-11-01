import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthProvider';
import { useMainContext } from '../contexts/MainProvider'
import { sidebarLinks } from './data/adminData'

import { Navbar, Footer, Sidebar, ThemeSettings, LoadingComponent } from '../components'
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminLayout = () => {
  const authContext = useContext(AuthContext);

  const { isIntakeOpened, isLoading, setIsLoading, activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useMainContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <div className='flex relative dark:bg-main-dark-bg'>

        {/* Settings Icon */}
        {authContext.isLoggedIn &&
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type='button'
                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                style={{ background: currentColor, borderRadius: '50%' }}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
        }


        {/* SideBar */}
        {activeMenu ? (
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
            <Sidebar 
              links={sidebarLinks}
            />
          </div>
        ) : (
          <div className='w-0 dark:bg-secondary-dark-bg'>
            <Sidebar 
              links={sidebarLinks}
            />
            
          </div>
        )}


        {/* Right Section */}
        <div className={
          `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
					${activeMenu ? 'md:ml-72' : 'flex-2'}`
        }>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
            {/* Same as */}
          <ToastContainer />

          {/* Navbar */}
          <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
            <Navbar />
          </div>

          {/* Main content */}
          <div>
            {themeSettings && <ThemeSettings />}
            {isLoading && <LoadingComponent />}
            <Outlet />
            

          </div>

        </div>
      </div>

    </div>
  )
}

export default AdminLayout