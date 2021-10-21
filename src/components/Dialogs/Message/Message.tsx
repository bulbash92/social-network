import s from "../Dialogs.module.css";
import React, {ChangeEvent} from "react";


export type MessagePropsType = {
    message: string
    id: string
}

function Message(props: MessagePropsType) {

    return (
        <div className={s.message}>{props.message}</div>
    )
}

export default Message;