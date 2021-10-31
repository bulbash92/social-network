import React, {ChangeEvent} from 'react'
import s from './MyPosts.module.css'
import Post, {PostType} from "./Post/Post";
import {InitialStateType} from "../../../Redux/profile-reducer";

type MyPostsPropsType = {
    profilePage: InitialStateType
    addPost: (text: string) => void
    updateNewPostText: (text: string) => void
}


function MyPosts(props: MyPostsPropsType) {

    const postsElements = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)
    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElement.current)
            props.addPost(newPostElement.current.value)
    }
    const onPostChange = () => {
        if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.profilePage.newPostText}
                        ref={newPostElement}>
                    </textarea>
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