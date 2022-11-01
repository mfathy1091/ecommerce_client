import React from 'react';
import './loadingButton.css'
import { useMainContext } from '../../contexts/MainProvider';

const LoadingButton = ({ icon, className, onClick, children, disabled=false, disabledOnLoading=true, loading=false }) => {
  const { setIsClicked, initialState } = useMainContext();
  
  return (
    <div>
    <button
      onClick={onClick}
      className={className}
      disabled={disabled || (disabledOnLoading ? loading : '')}      
    >
      {loading ? <div className="loader"></div> : ''} {icon} {children}
    </button>

    </div>



  );
};

export default LoadingButton