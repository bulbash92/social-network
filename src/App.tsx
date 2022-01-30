import React, {useEffect} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./Redux/redux-store";
import {Preloader} from "./components/preloader/preloader";
import {initializeApp} from "./Redux/app-reducer";


function App() {
    const dispatch = useDispatch()
    const initialized = useSelector<AppStateType, boolean>(state => state.app.isInitialized)
    console.log("initialized", initialized)
    useEffect(() => {
        dispatch(initializeApp())
    }, [])


    if (!initialized) {
        return <Preloader/>
    }

    return (

        <div className='app-wrapper'>
            <HeaderContainer/>
            <div className='app-wrapper-content'>
                <Navbar/>
                <Route
                    path='/dialogs'
                    render={() => <DialogsContainer/>}
                />
                <Route
                    path='/profile/:userId?'
                    render={() => <ProfileContainer/>}
                />
                <Route
                    path='/login'
                    render={() => <Login/>}
                />
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>

    );
}

export default App;
