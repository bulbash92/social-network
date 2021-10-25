import React, {ChangeEvent} from 'react'
import s from './MyPosts.module.css'
import Post, {PostType} from "./Post/Post";
import {ActionsType} from "../../../Redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}



function MyPosts(props: MyPostsPropsType) {

    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if(newPostElement.current)
        props.dispatch(addPostActionCreator(newPostElement.current.value))
    }
    const onPostChange = () => {
        if (newPostElement.current) {
           props.dispatch(updateNewPostTextActionCreator(newPostElement.current.value))
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}

            </div>
        </div>
    )
}

export default MyPosts