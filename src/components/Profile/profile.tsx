import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './profile.module.css'
import ProfileIfo from "./ProfileInfo/ProfileIfo";
import {ActionsType, ProfilePageType} from "../../Redux/State";

type ProfilePropsType = {
    profilePage: ProfilePageType
    // addPost: ()=> void
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsType) => void

}

function Profile(props: ProfilePropsType) {

    return(
        <main className={s.profile}>
           <ProfileIfo/>
            <MyPosts
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
                posts={props.profilePage.posts}
            />
        </main>
    )
}

export default Profile;