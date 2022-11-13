import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { useContext } from 'react';
import AuthContext from '../contexts/AuthProvider';
import { useMainContext } from '../contexts/MainProvider'
import { sidebarLinks } from './data'
import styled from 'styled-components';

import { Navbar, Footer, Sidebar, ThemeSettings, LoadingComponent } from '../components'
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainContainer = styled.div`
  display: flex;
  position: relative;
`
const Left = styled.div`
  position: fixed;
  background-color: var(--bg-secondary-dark-bg); 
  width: 18rem;
`

const Right = styled.div`
min-height: 100vh;
width: 100%;
background-color: var(--bg-main-dark-bg);
display: flex;
flex-direction: column;
`


const PageContainer = styled.div`
  padding: 20px;
  background-color: #f2f1f2;
  height: 100%;
  /* #f2f1f2 */
`

const AdminLayout = () => {
  const authContext = useContext(AuthContext);

  const { isIntakeOpened, isLoading, setIsLoading, activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useMainContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <MainContainer>

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


        {/* Sidebar */}
        {activeMenu && 
          <Left>
            <Sidebar links={sidebarLinks}/>
          </Left>
        }


        {/* Right Section */}
        <Right className={`${activeMenu ? 'md:ml-72' : 'flex-2'}`}>

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
          <div className='static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
            <Navbar />
          </div>

          {/* Main content */}
          <PageContainer>
            {themeSettings && <ThemeSettings />}
            {isLoading && <LoadingComponent />}
            <Outlet />
            

          </PageContainer>

        </Right>
      </MainContainer>

    </div>
  )
}

export default AdminLayout