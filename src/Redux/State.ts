import {v1} from "uuid";

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addMessage: () => void
    updateNewMessageText: (newText: string) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}



export type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>


export const addPostActionCreator = (postText: string) => {
    return {
        type: 'ADD-POST',
        newPostText: postText
    } as const
}

export const updateNewPostTextActionCreator = (postText: string,) => {
    return {

        type: 'UPDATE-NEW-POST-TEXT',
        newText: postText
    } as const
}

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


let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {message: 'Hi, how are you?', id: v1(), likesCount: 12},
                {message: 'It s my first pos', id: v1(), likesCount: 9}
            ],
            newPostText: 'it-kamasutra.com',
        },
        dialogsPage: {
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
            newMessageText: 'hello'
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    addPost() {
        const newPost: PostType = {
            id: v1(),
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber()
    },
    addMessage() {
        const newMessage: MessageType = {
            id: v1(),
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber()
    },
    updateNewMessageText(newText: string) {
        this._state.dialogsPage.newMessageText = newText
        this._callSubscriber()
    },
    dispatch(action) {  // {type: 'ADD-POST'}
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: v1(),
                message: this._state.profilePage.newPostText,  //this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber()

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber()
        } else if (action.type === 'ADD-MESSAGE') {
            const newMessage: MessageType = {
                id: v1(),
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber()
        }
    }
}


type MessageType = {
    id: string
    message: string
}

type DialogType = {
    id: string
    name: string
}
type PostType = {
    id: string
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}


export default store;
//window.store = store;