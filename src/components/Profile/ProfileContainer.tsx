import React, {Component, ComponentType} from "react";
import s from './profile.module.css'
import Profile from "./profile";
import {connect} from "react-redux";
import {
    getUserProfile,
    getUserStatus,
    ProfileType,
    setStatus,
    setUserProfile,
    updateStatus
} from "../../Redux/profile-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}
type ProfileContainerType = MapStateToPropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType

class ProfileContainer extends Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            if(this.props.userId) {
                userId = this.props.userId.toString();
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {

        return (
            <main className={s.profile}>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    setStatus={this.props.setStatus}
                    status={this.props.newStatusText}
                    updateStatus={this.props.updateStatus}
                />
            </main>
        )
    }
}

type MapStateToPropsType = {
    profile: null | ProfileType
    newStatusText: string
    userId: number | null
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
    getUserProfile: (userId: string) => void
    setStatus: (newStatusText: string) => void
    getUserStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        newStatusText: state.profilePage.newStatusText,
        userId: state.auth.userId
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {setUserProfile, getUserProfile, getUserStatus, updateStatus, setStatus}),
    withRouter,
    withAuthRedirect,
)
(ProfileContainer)