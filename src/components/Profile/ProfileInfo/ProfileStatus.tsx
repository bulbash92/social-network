import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './ProfileInfo.module.css'
import {useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";

type ProfileStatusType = {
    status: string
    onChange: (newStatusText: string) => void
    updateStatus: (status: string) => void
}

const ProfileStatus = ({status, onChange, updateStatus}: ProfileStatusType) => {
    const statusP = useSelector<AppStateType, string>(state => state.profilePage.newStatusText)
    const ownerId = useSelector<AppStateType, number | null>(state => state.auth.userId)
    const profileId = useSelector<AppStateType, number | undefined>(state => state.profilePage.profile?.userId)
    const isOwner = ownerId === profileId
    console.log(ownerId)
    console.log(profileId)

    useEffect(() => {
        setTitle(statusP)
    }, [statusP])

    const [title, setTitle] = useState<any>(status);
    const [editMode, setEditMode] = useState<boolean>(false)

    const activateEditMode = () => {
        if(!isOwner) return
        setEditMode(true)
        setTitle(status)
    }
    const activateViewMode = () => {
        setEditMode(false);
        onChange(title);
        updateStatus(title)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }


    return (
        <div>

            {editMode ? <input value={title} onChange={onStatusChange} autoFocus onBlur={activateViewMode}/>
                : <span className={s.editableSpan} onDoubleClick={activateEditMode}>{title || "---"}</span>}
        </div>
    )
};

export default ProfileStatus;