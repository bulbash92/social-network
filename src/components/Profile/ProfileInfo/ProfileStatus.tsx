import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './ProfileInfo.module.css'

type ProfileStatusType = {
    status: string
    onChange: (newStatusText: string) => void
    updateStatus: (status: string) => void
}

const ProfileStatus = ({status, onChange, updateStatus}: ProfileStatusType) => {
    let [title, setTitle] = useState<any>(status);

    const [editMode, setEditMode] = useState<boolean>(false)

    const activateEditeMode = () => {
        setEditMode(true)
        setTitle(status)
    }
    const activateViewMode = () => {
        setEditMode(false);
        updateStatus(title)
        onChange(title);
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
       setTitle(e.currentTarget.value)

    }


    return (
        <div>
            {editMode ? <input value={title} onChange={onStatusChange} autoFocus onBlur={activateViewMode}/>
                : <span className={s.editableSpan} onDoubleClick={activateEditeMode}>{title}</span>}
        </div>
    )
};

export default ProfileStatus;