import React, {useEffect} from 'react';
import Header from "./Header";
import axios from "axios";
import {useDispatch} from "react-redux";
import { setAuthUserData} from "../../Redux/auth-reducer";

function HeaderContainer() {

    const dispatch = useDispatch()
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }, [])

    return (

        <Header/>
    )
}

export default HeaderContainer;