import {v1} from "uuid";
import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {ActionsType, ProfilePageType} from "./store";

export const addPostActionCreator = (postText: string) => {
    return {
        type: 'ADD-POST',
        newPostText: postText
    } as const
}

export const updateNewPostTextActionCreator = (postText: string,) => {
    return {

        type: 'UPDATE-NEW-POST-TEXT',
        newText: postText
    } as const
}

//type profileReducerACType = ReturnType<typeof addPostActionCreator>
//  | ReturnType<typeof updateNewPostTextActionCreator>

const profileReducer = (state: ProfilePageType, action: ActionsType) => {

    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: v1(),
                message: state.newPostText,  //this._state.profilePage.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state
        default:
            return state
    }

}

export default profileReducer