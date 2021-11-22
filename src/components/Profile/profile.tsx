import React from "react";
import s from './profile.module.css'
import ProfileIfo from "./ProfileInfo/ProfileIfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


function Profile() {

    return (
        <main className={s.profile}>
            <ProfileIfo/>
            <MyPostsContainer/>
        </main>
    )
}

export default Profile;