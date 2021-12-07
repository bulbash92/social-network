import React, {useEffect} from 'react';
import Header from "./Header";
import {useDispatch} from "react-redux";
import {getAuthUserData} from "../../Redux/auth-reducer";

function HeaderContainer() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAuthUserData())
    }, [])

    return (

        <Header/>
    )
}

export default HeaderContainer;