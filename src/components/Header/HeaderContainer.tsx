import React, {useEffect} from 'react';
import Header from "./Header";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setAuthUserData} from "../../Redux/auth-reducer";
import {usersApi} from "../../api/api";

function HeaderContainer() {

    const dispatch = useDispatch()
    useEffect(() => {
        usersApi.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }, [])

    return (

        <Header/>
    )
}

export default HeaderContainer;