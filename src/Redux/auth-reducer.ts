import {authApi, LoginParamsType} from "../api/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk/es/types";
import {AppStateType} from "./redux-store";

export type initialStateAuthType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    isLoggedIn: boolean
    error: string
}

let initialState: initialStateAuthType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isLoggedIn: false,
    error: ''
}
export const authReducer = (state: initialStateAuthType = initialState, action: ActionAuthType): initialStateAuthType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.data}
        case 'STOP-SUBMIT':
            return {...state, error: action.error}
        default:
            return state
    }

}

type ActionAuthType = ReturnType<typeof setAuthUserData> | ReturnType<typeof stopSubmit>
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'SET-USER-DATA',
        data: {userId, email, login, isAuth}
    } as const
}

export const stopSubmit = (error: string) => ({type: 'STOP-SUBMIT', error} as const)
export const getAuthUserData = () => (dispatch: Dispatch<ActionAuthType>) => {
    return authApi.me()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const login = (data: LoginParamsType): ThunkAction<Promise<void>, AppStateType, unknown, ActionAuthType> => {
    return async (dispatch) => {
        await authApi.login(data)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    let message = res.data.messages.length > 0
                        ? res.data.messages[0] : 'Some error'
                    dispatch(stopSubmit(message))
                }
            })
    }
}

export const logout = () => (dispatch: Dispatch<ActionAuthType>) => {
    authApi.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}