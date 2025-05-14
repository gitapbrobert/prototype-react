

import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Header from '../components/Header';
import SalesPlanBar from '../components/SalesPlanBar';

const Layout =() =>{
    return (
        <>
            <div>
                <Header />
                <SalesPlanBar />
            </div>
            

            <Outlet />
        </>


    )
}

export default Layout;


