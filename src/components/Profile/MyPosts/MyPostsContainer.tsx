import React from 'react'
import {addPostActionCreator, InitialStateType, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
   profilePage:InitialStateType
}

type mapDispatchToPropsType = {
    updateNewPostText: (text:string) => void,
    addPost: (text: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewPostText: (text:string) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: (text: string) => {
            dispatch(addPostActionCreator(text))
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer