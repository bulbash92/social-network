import React from "react";
import s from "./Post.module.css";

export type PostType = {
    message: string
    likesCount: number
    id: string
}

function Post(props : PostType) {
    return (
        <div className={s.item}>
            <img
                src='https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png'/>
            {props.message}
            <div className={s.like}><span>like</span><span>{props.likesCount}</span></div>
        </div>
    )
}

export default Post;