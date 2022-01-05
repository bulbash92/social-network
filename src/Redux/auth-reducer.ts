import {ThunkAction} from "redux-thunk/es/types";
import {AppStateType} from "./redux-store";
import {authApi, LoginParamsType} from "../api/api";
import {Dispatch} from "redux";

export type initialStateAuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    isInitialised: boolean
}

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isInitialised: false,
}
export const authReducer = (state: initialStateAuthType = initialState, action: ActionAuthType) => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.data, isAuth: true}
        case 'SET-INITIALIZED':
            return {...state, isInitialised: action.initialized}
        default:
            return state
    }

}

type ActionAuthType = ReturnType<typeof setAuthUserData> | SetInitializedType
export const setAuthUserData = (userId: number, email: string, login: string) => {
    return {
        type: 'SET-USER-DATA',
        data: {userId, email, login}
    } as const
}

export const setInitialized = (initialized: boolean) => ({type: 'SET-INITIALIZED', initialized}as const)
type SetInitializedType = ReturnType<typeof setInitialized>
export const getAuthUserData = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionAuthType> => {
    return async (dispatch) => {
        authApi.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}

export const login = (data: LoginParamsType) => (dispatch: Dispatch<ActionAuthType>) => {
    authApi.login(data)
        .then(res => {
            if(res.data.resultCode === 0) {
                debugger
                dispatch(setInitialized(true))
            }
        })
}