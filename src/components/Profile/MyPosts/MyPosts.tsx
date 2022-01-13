import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import { ProfilePageType} from "../../../Redux/profile-reducer";
import PostForm from "./PostForm";

type MyPostsPropsType = {
    profilePage: ProfilePageType
    addPost: (text: string) => void
}


function MyPosts(props: MyPostsPropsType) {

    const postsElements = props.profilePage.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} id={p.id}/>)

    const addPost = (value: string) => {
            props.addPost(value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <PostForm addPost={addPost}/>
                {/*<div>*/}
                {/*   */}
                {/*    <textarea*/}
                {/*        onChange={onPostChange}*/}
                {/*        value={props.profilePage.newPostText}*/}
                {/*        ref={newPostElement}>*/}
                {/*    </textarea>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <button onClick={addPost}>Add post</button>*/}
                {/*</div>*/}
            </div>
            <div className={s.posts}>
                {postsElements}

            </div>
        </div>
    )
}

export default MyPosts