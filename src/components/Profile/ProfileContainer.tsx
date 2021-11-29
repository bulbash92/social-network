import React, {Component} from "react";
import s from './profile.module.css'
import Profile from "./profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
    userId: string
}

type ProfileContainerType = MapStateToPropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType

class ProfileContainer extends Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <main className={s.profile}>
                <Profile {...this.props} profile={this.props.profile}/>
            </main>
        )
    }
}

type MapStateToPropsType = {
    profile: null | ProfileType
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let WithUrlDataComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataComponent)