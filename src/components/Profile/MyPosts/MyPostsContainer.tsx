import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from '../../../StoreContext';

type MyPostsContainerType = {
    // dispatch: (action: ActionsType) => void
    // posts: Array<PostType>
    // newPostText: string
}


function MyPostsContainer(props: MyPostsContainerType) {

    // const addPost = (text: string) => {
    //     props.dispatch(addPostActionCreator(text))
    // }
    // const onPostChange = (text: string) => {
    //     let action = updateNewPostTextActionCreator(text)
    //     props.dispatch(action)
    // }

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                // let state = store.getState()

                const addPost = (text: string) => {
                    store.dispatch(addPostActionCreator(text))
                }
                const onPostChange = (text: string) => {
                    let action = updateNewPostTextActionCreator(text)
                    store.dispatch(action)
                }
                return  <MyPosts
                    newPostText={store.getState().profilePage.newPostText}
                    posts={store.getState().profilePage.posts}
                    addPost={addPost}
                    updateNewPostText={onPostChange}/>
            }
        }

        </StoreContext.Consumer>
    )
}

export default MyPostsContainer