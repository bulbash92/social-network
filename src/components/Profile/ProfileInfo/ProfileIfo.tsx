import React from "react";
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../Redux/profile-reducer";
import {Preloader} from "../../preloader/preloader";

type ProfileInfoPropsType ={ profile: ProfileType | null}

function ProfileIfo({profile}: ProfileInfoPropsType) {
    if(!profile) {
        return <Preloader/>
    }
    return (
        <>
            <div className={s.wallpaper}><img
                src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
                width='700px'/>
            </div>
            <div className={s.descriptionBlock}>
                <h3>{profile.fullName}</h3>
                <img src={profile.photos.large} alt={'avatar'}/>
                <p>{profile.lookingForAJob}</p>
                <a href={'profile.contacts.github'}>{profile.contacts.github}</a>

                <p>{profile.lookingForAJobDescription}</p>
            </div>
        </>
    )
}

export default ProfileIfo