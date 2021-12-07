import {v1} from "uuid";
import {PhotosType} from "./usersReducer";
import {ThunkAction} from "redux-thunk/es/types";
import {AppStateType} from "./redux-store";
import {usersApi} from "../api/api";

export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: null | ProfileType
}

const initialState = {
    posts: [
        {message: 'Hi, how are you?', id: v1(), likesCount: 12},
        {message: 'It s my first pos', id: v1(), likesCount: 9}
    ] as Array<PostType>,
    newPostText: 'it',
    profile: null
}

export type InitialStateType = typeof initialState
const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType): ProfilePageType => {

    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}

        }
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newText}
        // newState.newPostText = action.newText;
        // return newState
        case "SET-USER-PROFILE":
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export type ProfileActionsType = ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setUserProfile>
export const addPost = (postText: string) => {
    return {
        type: 'ADD-POST',
        newPostText: postText
    } as const
}

export const updateNewPostText = (postText: string,) => {
    return {

        type: 'UPDATE-NEW-POST-TEXT',
        newText: postText
    } as const
}

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile,
    } as const
}
// thunk
export const getUserProfile = (userId: string): ThunkAction<Promise<void>, AppStateType, unknown, ProfileActionsType> => {
    return async (dispatch) => {
        usersApi.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }

}
export default profileReducer