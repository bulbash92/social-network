import React from "react";
import s from './profile.module.css'
import ProfileIfo from "./ProfileInfo/ProfileIfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/profile-reducer";

type ProfilePropsType = {
    profile: ProfileType | null
    setStatus: (newStatusText: string) => void
    status: string
    updateStatus: (status: string) => void
}


function Profile({profile, setStatus, status, updateStatus}: ProfilePropsType) {

    return (
        <main className={s.profile}>
            <ProfileIfo profile={profile}
                        setStatus={setStatus}
                        status={status}
                        updateStatus={updateStatus}
            />
            <MyPostsContainer/>
        </main>
    )
}

export default Profile;