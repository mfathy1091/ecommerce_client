import React, { createContext, useContext, useState } from 'react';

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
  isLoading: false,
};

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isIntakeOpened, setIsIntakeOpened] = useState(false);
  
  
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clickedItem) => setIsClicked({ ...initialState, [clickedItem]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <MainContext.Provider value={{ isIntakeOpened, setIsIntakeOpened, currentColor, currentMode, activeMenu, screenSize, 
      setScreenSize, initialState, 
      isClicked, setIsClicked, handleClick,
      setActiveMenu, 
      setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings,
      isLoading, setIsLoading }}>
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);