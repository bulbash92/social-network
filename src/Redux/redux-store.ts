import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./usersReducer";
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk";
import {appReducer} from "./app-reducer";

export const rootReducer = combineReducers({
   profilePage: profileReducer,
    dialogsPage:dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer, applyMiddleware(thunk))


export default store