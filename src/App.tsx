import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";


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
                    path='/Dialogs'
                    render={() => <DialogsContainer/>}
                />
                <Route
                    path='/Profile'
                    render={() => <Profile/>}
                />
                <Route path='/News' component={News}/>
                <Route path='/Music' component={Music}/>
                <Route path='/Users' component={UsersContainer}/>
                <Route path='/Settings' component={Settings}/>
            </div>
        </div>

    );
}

export default App;
