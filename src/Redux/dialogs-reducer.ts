import {v1} from "uuid";

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type MessageType = {
    id: string
    message: string
}

export type DialogType = {
    id: string
    name: string
}

const initialState = {
    dialogs: [
        {name: 'Dimych', id: v1()},
        {name: 'Sergey', id: v1()},
        {name: 'Victoria', id: v1()},
        {name: 'Robert', id: v1()},
        {name: 'Evgeniy', id: v1()}
    ] as Array<DialogType>,
    messages: [
        {message: 'Hi', id: v1()},
        {message: 'How are you', id: v1()},
        {message: 'Yo', id: v1()}
    ] as Array<MessageType>,
    newMessageText: ''
}

export type InitialStateType = typeof initialState
const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionsType): InitialStateType => {

    switch (action.type) {
        case 'ADD-MESSAGE': {
            const newMessage: MessageType = {
                id: v1(),
                message: state.newMessageText
            }
            //const newState = {...state}
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''}
            // newState.messages.push(newMessage)
            // newState.newMessageText = ''
        }
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            //const newState = {...state}
            return {...state, newMessageText: action.newText}

        }
        default:
            return state
    }

    return state
}

export type DialogsActionsType = ReturnType<typeof addMessage> | ReturnType<typeof updateNewMessageText>

export const addMessage = (messageText: string) => {
    return {
        type: 'ADD-MESSAGE',
        newText: messageText

    } as const
}
export const updateNewMessageText = (messageText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newText: messageText

    } as const
}

export default dialogsReducer