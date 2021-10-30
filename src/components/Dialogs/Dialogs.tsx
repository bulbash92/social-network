import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType} from "../../Redux/store";

type DialogsType = {
     dialogsPage: DialogPageType
    addMessageText: (text: string) => void
    onMessageChange: (text: string) => void
}

function Dialogs(props: DialogsType) {

    const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>)
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const OnSendMessageCLick = () => {
        if (newMessageElement.current) {
            props.addMessageText(newMessageElement.current.value)
        }
    }
    const onMessageChange = () => {
        if (newMessageElement.current) {
            props.onMessageChange(newMessageElement.current.value)
        }
    }
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
            <div>
                <div>
                    <textarea className={s.inputMessage}
                              autoFocus
                              onChange={onMessageChange}
                              ref={newMessageElement}
                              value={props.dialogsPage.newMessageText}>

                </textarea>
                </div>
                <button onClick={OnSendMessageCLick}>send</button>
            </div>
        </div>
    )
}

export default Dialogs;