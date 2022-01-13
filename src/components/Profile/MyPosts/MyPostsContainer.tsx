import React from 'react'
import {addPost, InitialStateType, ProfilePageType} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";

type mapStateToPropsType = {
    profilePage: ProfilePageType
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost,})(MyPosts)

export default MyPostsContainer