import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import state from "../../../Redux/store";
import {v1} from "uuid";


export type DialogItemPropsType = {
    name: string
    id: string
}

function DialogItem(props: DialogItemPropsType) {
    let path = '/dialogs/' + props.id;
    return <div className={s.dialogsItem + ' ' + s.active}>
        <img src='https://klike.net/uploads/posts/2019-03/1551511825_12.jpg'/>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem