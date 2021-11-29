
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

export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}


const initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

export type InitialStateType = typeof initialState
const usersReducer = (state: UsersPageType = initialState, action: UsersACType): InitialStateType => {
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
        default:
            return state
    }
}

export type UsersACType = ReturnType<typeof followedToggle>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>


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
        type : 'TOGGLE-IS-FETCHING',
        isFetching
    } as const
}

export default usersReducer