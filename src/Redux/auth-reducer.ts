import {ThunkAction} from "redux-thunk/es/types";
import {AppStateType} from "./redux-store";
import {usersApi} from "../api/api";

export type initialStateAuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}
export const authReducer = (state: initialStateAuthType = initialState, action: ActionAuthType) => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }

}

type ActionAuthType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: number, email: string, login: string) => {
    return {
        type: 'SET-USER-DATA',
        data: {userId, email, login}
    } as const
}

export const getAuthUserData = (): ThunkAction<Promise<void>, AppStateType, unknown, ActionAuthType> => {
    return async (dispatch) => {
        usersApi.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }

}