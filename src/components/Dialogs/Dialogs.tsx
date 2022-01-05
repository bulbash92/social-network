import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType} from "../../Redux/dialogs-reducer";
import AddMessageForm from "./Message/AddMessageForm";


type DialogsType = {
    dialogsPage: DialogPageType
    isAuth: boolean
    addMessage: (text: string) => void
    updateNewMessageText: (text: string) => void
}

function Dialogs(props: DialogsType) {

    const messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    // const newMessageElement = React.createRef<HTMLTextAreaElement>()

    // const OnSendMessageCLick = () => {
    //     if (newMessageElement.current) {
    //         props.addMessage(newMessageElement.current.value)
    //     }
    // }
    // const onMessageChange = () => {
    //     if (newMessageElement.current) {
    //         props.updateNewMessageText(newMessageElement.current.value)
    //     }
    // }

    const addNewMessage = (value: string) => {
        props.addMessage(value)
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

                <AddMessageForm onSubmit={addNewMessage}/>

            </div>
        </div>
    )
}

export default Dialogs;