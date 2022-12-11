import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Template/Footer';
import Header from './../../Pages/Template/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;