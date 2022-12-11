import React from 'react';
import { Outlet } from 'react-router-dom';
import Template from '../../Pages/Template/Template';
import Header from './../../Pages/Template/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;