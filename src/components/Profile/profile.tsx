import React from "react";
import s from './profile.module.css'
import ProfileIfo from "./ProfileInfo/ProfileIfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType | null
}


function Profile( {profile}: ProfilePropsType) {

    return (
        <main className={s.profile}>
            <ProfileIfo profile={profile}/>
            <MyPostsContainer/>
        </main>
    )
}

export default Profile;