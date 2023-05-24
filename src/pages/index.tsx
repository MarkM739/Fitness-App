import React from 'react';
import Navbar from "../components/Navbar";
import { Outlet } from 'react-router-dom';

const IndexPage = () => {
    return (
        <>
            <Navbar/>
            <Outlet />
        </>
    )

    
}

export default IndexPage;

