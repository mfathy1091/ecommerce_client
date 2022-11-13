import React from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { userProfileData } from '../data/dummy';
import { useMainContext } from '../contexts/MainProvider';
import useAuth from '../hooks/useAuth';
import useLogout from '../hooks/useLogout';
import { useNavigate } from 'react-router-dom';

const ProfileDropDown = () => {
  const { currentUser } = useAuth();
  const logout = useLogout();
  const navigate = useNavigate();

  const { currentColor } = useMainContext();
  // const {currentUser} = use Auth();
  // const [name, setName] = useState(currentUser?.name)
  // const [profilePictureUrl, setUrl] = useState(currentUser?.profile_picture_url)

  const handleLogout = async() => {
    await logout();
    navigate('/admin/login');
  } 

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          src={currentUser.avatar}
          alt='avatar-picture'
          className='h-16 w-16 rounded-full'
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">{currentUser.name}</p>
          <p className="text-gray-500 text-sm dark:text-gray-400">{currentUser.role}</p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">{currentUser.email}</p>
        </div>
      </div>
      <div>

        <NavLink 
          className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]"
          to="/profile"
        >
          <p className="text-gray-500 text-sm dark:text-gray-400">Edit Profile</p>
        </NavLink>
      </div>
      <div className="mt-5">
        <button className='login-button' onClick={handleLogout}>Logout</button>
      </div>


    </div>

  );
};

export default ProfileDropDown;