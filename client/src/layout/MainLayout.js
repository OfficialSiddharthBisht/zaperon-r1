import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
export default function MainLayout() {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    );
}