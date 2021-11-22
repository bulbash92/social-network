import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType, updateNewMessageText} from "../../Redux/dialogs-reducer";


type DialogsType = {
    dialogsPage: DialogPageType
    addMessage: (text: string) => void
    updateNewMessageText: (text: string) => void
}

function Dialogs(props: DialogsType) {

    const messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const OnSendMessageCLick = () => {
        if (newMessageElement.current) {
            props.addMessage(newMessageElement.current.value)
        }
    }
    const onMessageChange = () => {
        if (newMessageElement.current) {
            props.updateNewMessageText(newMessageElement.current.value)
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