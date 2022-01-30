import React from 'react';
import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Redirect} from "react-router-dom";

function HeaderContainer() {

    const dispatch = useDispatch()
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)


    const handleLogout = () => {
        dispatch(logout())
        if (!isAuth) return <Redirect to={'/login'}/>
    }
    return (
        <Header onLogout={handleLogout}/>
    )
}

export default HeaderContainer;