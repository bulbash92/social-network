import {connect} from "react-redux";
import Users from "./Users";
import usersReducer, {followedToggleAC, setUsersAC, UserType} from "../../Redux/usersReducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../Redux/redux-store";

type mapStateToPropsType = {
    users: Array<UserType>
}

type mapDispatchToPropsType = {
    followedToggle: (userID: string) => void
    setUsers: (users: Array<UserType>) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        followedToggle: (userID: string) => {
            dispatch(followedToggleAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)