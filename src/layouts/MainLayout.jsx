import { Outlet, useLocation } from 'react-router-dom';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const MainLayout = () => {
    // const { authStore, appStore, notificationsStore, billingStore } = useContext(Context);

    useEffect(() => {
    }, [])

    return (
        <div className={"main-layout"}>
            <Outlet />
        </div>
    );
};

export default observer(MainLayout);