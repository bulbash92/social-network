import {ActionsType} from "./store";
import * as path from "path";


type UserLocationType = {
    city: string
    country: string
}

export type UserType = {
    id: string
    fullName: string
    followed: boolean
    status: string
    location: UserLocationType
    avatar: string
}

export type UsersPageType = {
    users: Array<UserType>
}


const initialState = {
    users: [] as Array<UserType>
}

export type InitialStateType = typeof initialState
const usersReducer = (state: UsersPageType = initialState, action: ActionsType ): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW_TOGGLE':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: !u.followed} : u)
            }
        case 'SET_USER':
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export type UsersACType = ReturnType<typeof followedToggleAC> | ReturnType<typeof setUsersAC>

// export type followToggleACType = ReturnType<typeof followedToggleAC>
// export type setUsersACType = ReturnType<typeof setUsersAC>
export const followedToggleAC = (userID: string) => {
    return {
        type: 'FOLLOW_TOGGLE',
        userID: userID
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET_USER',
        users: users
    } as const
}

export default usersReducer