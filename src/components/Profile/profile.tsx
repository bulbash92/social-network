import React from "react";
import s from './profile.module.css'
import ProfileIfo from "./ProfileInfo/ProfileIfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type ProfilePropsType = {
    // profilePage: ProfilePageType
    // addPost: ()=> void
    // updateNewPostText: (newText: string) => void
    // dispatch: (action: ActionsType) => void
    // store:Store<RootStateType, ActionsType>
}

function Profile(props: ProfilePropsType) {
    // const state = props.store
    return(
        <main className={s.profile}>
           <ProfileIfo/>
            <MyPostsContainer
                // newPostText={state.getState().profilePage.newPostText}
                // dispatch={state.dispatch}
                // posts={state.getState().profilePage.posts}
            />
        </main>
    )
}

export default Profile;