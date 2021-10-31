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

    return (
        <main className={s.profile}>
            <ProfileIfo/>
            <MyPostsContainer/>
        </main>
    )
}

export default Profile;