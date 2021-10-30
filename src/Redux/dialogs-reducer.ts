import {ActionsType, DialogPageType, MessageType} from "./store";
import {v1} from "uuid";

export const addMessageAC = (messageText: string) => {
    return {
        type: 'ADD-MESSAGE',
        newText: messageText

    }
}
export const updateNewMessageTextAC = (messageText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newText: messageText

    }
}

const initialState = {
    dialogs: [
        {name: 'Dimych', id: v1()},
        {name: 'Sergey', id: v1()},
        {name: 'Victoria', id: v1()},
        {name: 'Robert', id: v1()},
        {name: 'Evgeniy', id: v1()}
    ],
    messages: [
        {message: 'Hi', id: v1()},
        {message: 'How are you', id: v1()},
        {message: 'Yo', id: v1()}
    ],
    newMessageText: ''
}
 const dialogsReducer = (state: DialogPageType = initialState, action: ActionsType) => {
    if (action.type === 'ADD-MESSAGE') {
        const newMessage: MessageType = {
            id: v1(),
            message: state.newMessageText
        }
        state.messages.push(newMessage)
        state.newMessageText = ''

    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
        state.newMessageText = action.newText
    }

    return state
}

export default dialogsReducer