import React from 'react';
import './loadingButton.css'
import { useMainContext } from '../../contexts/MainProvider';
import Loader from '../Loader/Loader';

const LoadingButton = ({ icon, className, onClick, children, disabled=false, disabledOnLoading=true, loading=false }) => {
  const { setIsClicked, initialState } = useMainContext();
  
  return (
    <div>
    <button
      onClick={onClick}
      className={className}
      disabled={disabled || (disabledOnLoading ? loading : '')}      
    >
      {loading ? <Loader color='fff' /> : ''} {icon} {children}
    </button>

    </div>



  );
};

export default LoadingButton