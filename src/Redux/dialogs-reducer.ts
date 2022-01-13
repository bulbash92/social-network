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
}

export type InitialStateType = typeof initialState
const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionsType): InitialStateType => {

    switch (action.type) {
        case 'ADD-MESSAGE': {
            let body = action.newText
            return {...state,
                messages: [...state.messages, {id: v1(), message: body}],}
        }
        default:
            return state
    }

    return state
}

export type DialogsActionsType = ReturnType<typeof addMessage>

export const addMessage = (messageText: string) => {
    return {
        type: 'ADD-MESSAGE',
        newText: messageText

    } as const
}


export default dialogsReducer