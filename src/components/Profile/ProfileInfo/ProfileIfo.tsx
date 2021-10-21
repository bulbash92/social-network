import React from "react";
import s from './ProfileInfo.module.css'


function ProfileIfo() {
    return (
        <div>
            <div className='wallpaper'><img
                src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
                width='700px'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + descriptions
                <img/>
            </div>
        </div>
    )
}

export default ProfileIfo