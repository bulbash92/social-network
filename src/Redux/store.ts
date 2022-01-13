import {v1} from "uuid";
import profileReducer, {addPost,} from "./profile-reducer";
import dialogsReducer, {addMessage} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {followedToggle, setUsers} from "./usersReducer";
type StoreType = {
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

 type ActionsType =
    ReturnType<typeof addPost>
    | ReturnType<typeof addMessage>
    | ReturnType<typeof followedToggle>
    | ReturnType<typeof setUsers>


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
            newMessageText: ''
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
    dispatch(action) {

        //this._state.profilePage = profileReducer(this._state.profilePage, action)
       // this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber()
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

type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
 type DialogPageType = {
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
export default store
//window.store = store;