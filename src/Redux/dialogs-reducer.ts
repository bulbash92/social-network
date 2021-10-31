import {ActionsType, DialogPageType} from "./store";
import {v1} from "uuid";


export type MessageType = {
    id: string
    message: string
}

export type DialogType = {
    id: string
    name: string
}
export const addMessageAC = (messageText: string) => {
    return {
        type: 'ADD-MESSAGE',
        newText: messageText

    } as const
}
export const updateNewMessageTextAC = (messageText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newText: messageText

    } as const
}

const initialState = {
    dialogs: [
        {name: 'Dimych', id: v1()},
        {name: 'Sergey', id: v1()},
        {name: 'Victoria', id: v1()},
        {name: 'Robert', id: v1()},
        {name: 'Evgeniy', id: v1()}
    ]as Array<DialogType>,
    messages: [
        {message: 'Hi', id: v1()},
        {message: 'How are you', id: v1()},
        {message: 'Yo', id: v1()}
    ]as Array<MessageType>,
    newMessageText: ''
}

export type InitialStateType = typeof initialState
 const dialogsReducer = (state: DialogPageType = initialState, action: ActionsType) : InitialStateType => {
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