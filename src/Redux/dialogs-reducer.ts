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

// type dialogsReducerACType = | ReturnType<typeof addMessageAC>
//     | ReturnType<typeof updateNewMessageTextAC>


 const dialogsReducer = (state: DialogPageType, action: ActionsType) => {
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