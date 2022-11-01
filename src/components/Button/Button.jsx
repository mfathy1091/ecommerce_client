import React from 'react';
import './button.css'
import { useMainContext } from '../../contexts/MainProvider';

const Button = ({ icon, className, onClick, children, disabled = false }) => {
  const { setIsClicked, initialState } = useMainContext();

  return (
    <div>
    <button
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {icon} {children}
    </button>

    </div>



  );
};

export default Button