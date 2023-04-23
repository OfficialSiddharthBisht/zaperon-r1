import React from 'react'
import {Navigate, useRoutes} from 'react-router-dom';
import Login from '../pages/Login';
import Greetings from "../pages/Greetings"
import MainLayout from '../layout/MainLayout';

export default function Router(){
    return useRoutes([
        {
            path: "",
            element: <MainLayout />,
            children: [
                {
                    path : "login",
                    element : <Login />,
                },
                {
                    path : "greet",
                    element: <Greetings />
                },
            ],
        },
    ]);
}