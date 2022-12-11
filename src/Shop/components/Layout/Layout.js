import React from "react";
import Header from "./Header/Header";
import { SPage } from "./styles";
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <SPage>
              <Outlet />
              </SPage>
        </>
    );
};

export default Layout;