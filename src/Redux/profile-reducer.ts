import {v1} from "uuid";

export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

const initialState = {
    posts: [
        {message: 'Hi, how are you?', id: v1(), likesCount: 12},
        {message: 'It s my first pos', id: v1(), likesCount: 9}
    ] as Array<PostType>,
    newPostText: 'it',
}

export type InitialStateType = typeof initialState
const profileReducer = (state: ProfilePageType = initialState, action: ProfileActionsType): InitialStateType => {

    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostType = {
                id: v1(),
                message: state.newPostText,  //this._state.profilePage.newPostText,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
            // newState.posts = [...state.posts]
            // newState.posts.push(newPost);
            // newState.newPostText = ''

        }
        case 'UPDATE-NEW-POST-TEXT':
            return {...state, newPostText: action.newText}
        // newState.newPostText = action.newText;
        // return newState
        default:
            return state
    }
}

export type ProfileActionsType = ReturnType<typeof addPost>| ReturnType<typeof updateNewPostText>
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

export default profileReducer