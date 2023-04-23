import React from 'react'
import {Navigate, useLocation, useRoutes} from 'react-router-dom';
import Login from '../pages/Login';
import Greetings from "../pages/Greetings"
import MainLayout from '../layout/MainLayout';

function RequireAuth({children}){
    const accessToken = localStorage.getItem("accessToken",null);
    const location  = useLocation();

    if(accessToken === null || accessToken === undefined){
        return <Navigate to ="/" state = {{from :location}} replace />;
    }
    return children;
}


export default function Router(){
    return useRoutes([
        {
            path: "",
            element: <MainLayout />,
            children: [
                {
                    path : "",
                    element : <Login />,
                },
                {
                    path : "greet",
                    element: (
                        <RequireAuth>
                            <Greetings />
                        </RequireAuth>
                    )
                },
            ],
        },
    ]);
}