import {ThunkAction} from "redux-thunk/es/types";
import {AppStateType} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

export type initialStateAuthType = {
    isInitialized: boolean

}

let initialState: initialStateAuthType = {
    isInitialized: false,
}
export const appReducer = (state: initialStateAuthType = initialState, action: appReducerActionType): initialStateAuthType => {
    switch (action.type) {
        case 'SET-INITIALIZED':
            return {...state, isInitialized: true}
        default:
            return state
    }

}

type appReducerActionType = SetInitializedType
type SetInitializedType = ReturnType<typeof setInitialized>

export const setInitialized = () => ({type: 'SET-INITIALIZED', } as const)

export const initializeApp = (): ThunkAction<void, AppStateType, unknown, appReducerActionType> => async (dispatch) => {

    await dispatch(getAuthUserData())
    dispatch(setInitialized())
}


