import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { Route} from "react-router-dom";
import {ActionsType, StoreType} from "./Redux/store";


type AppType = {
    store: StoreType
}

function App(props: AppType) {
    return (
            <div className='app-wrapper'>
                <Header/>
                <div className='app-wrapper-content'>
                    <Navbar/>
                    <Route path='/Dialogs' render={() => <Dialogs
                        dialogsPage={props.store.getState().dialogsPage}
                        dispatch={props.store.dispatch.bind(props.store)}
                        // addMessage={props.store.addMessage.bind(props.store)}
                        // updateNewMessageText={props.store.updateNewMessageText.bind(props.store)}
                    />}/>
                    <Route path='/Profile'
                           render={() => <Profile
                               dispatch={props.store.dispatch.bind(props.store)}
                               profilePage={props.store.getState().profilePage}
                           />}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Music' component={Music}/>
                    <Route path='/Settings' component={Settings}/>
                </div>
            </div>

    );
}

export default App;
