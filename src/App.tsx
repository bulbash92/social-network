import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


type AppType = {
    // store: StoreType
}

function App(props: AppType) {
    return (
        <div className='app-wrapper'>
            <Header/>
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
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>

    );
}

export default App;
