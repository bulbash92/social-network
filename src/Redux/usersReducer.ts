import {usersApi} from "../api/api";
import {ThunkAction} from "redux-thunk/es/types";
import {AppStateType} from "./redux-store";
import {setAuthUserData} from "./auth-reducer";

type UserLocationType = {
    city: string
    country: string
}

export type PhotosType = {
    small: string
    large: string
}

export type UserType = {
    id: number
    name: string
    followed: boolean
    status: string
    location: UserLocationType
    photos: PhotosType
}

// export type UsersPageType = {
//     users: Array<UserType>
//     pageSize: number
//     totalUsersCount: number
//     currentPage: number
//     isFetching: boolean
// }

// export type InitialStateType = {
//     users: Array<UserType>
//     pageSize: number
//     totalUsersCount: number,
//     currentPage: number
//     isFetching: boolean
//     followed: boolean
//     followingInProgress: Array<number>
// }

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followed: false,
    followingInProgress: [] as Array<number>,
}

export type InitialStateType = typeof initialState
const usersReducer = (state: InitialStateType = initialState, action: UsersACType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW_TOGGLE':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: !u.followed} : u)
            }
        case 'SET_USER':
            return {...state, users: [...action.users]}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.totalUsersCount}
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        case "TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}

export type UsersACType = ReturnType<typeof followedToggle>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>


export const followedToggle = (userID: number) => {
    return {
        type: 'FOLLOW_TOGGLE',
        userID: userID
    } as const
}

export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET_USER',
        users: users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage,

    } as const
}

export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalUsersCount,

    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    } as const
}

export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
        isFetching,
        userId,
    } as const
}

export const getUsers = (currentPage: number, pageSize: number): ThunkAction<Promise<void>, AppStateType, unknown, UsersACType> => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersApi.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount));
            })
    }
}

export const follow = (userId: number): ThunkAction<Promise<void>, AppStateType, unknown, UsersACType> => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersApi.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followedToggle(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))

            })
    }
}
export const unfollow = (userId: number): ThunkAction<Promise<void>, AppStateType, unknown, UsersACType> => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersApi.unfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followedToggle(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))

            })
    }
}


export default usersReducer