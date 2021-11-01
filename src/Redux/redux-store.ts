import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./usersReducer";

export const rootReducer = combineReducers({
   profilePage: profileReducer,
    dialogsPage:dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
let store = createStore(rootReducer)


export default store