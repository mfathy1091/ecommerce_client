import React from "react";
import Header from "./Header/Header";
import Announcement from "../Announcement";
import { SPage } from "./styles";
import { Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";
import { lightTheme, darkTheme } from "../../styles/theme";
import { ThemeProvider } from "styled-components";

const Layout = ({ children }) => {
  const { theme } = useSelector((state) => state.ui);
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={currentTheme}>
      <Announcement />
      <Header />
      <Outlet />

      {/* <SPage>
            </SPage> */}
    </ThemeProvider>
  );
};

export default Layout;