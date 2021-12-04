import {connect} from "react-redux";
import usersReducer, {
    followedToggle,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFetching,
    UserType
} from "../../Redux/usersReducer";
import {AppStateType} from "../../Redux/redux-store";
import React, {Component} from "react";
import {Users} from "./Users";
import {Preloader} from "../preloader/preloader";
import {usersApi} from "../../api/api";

type UsersType = {
    users: Array<UserType>
    followedToggle: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends Component<UsersType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
       usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersApi.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            if (pages.length <= 50) {
                pages.push(i)
            }
        }

        return <div>
            {this.props.isFetching ?
                <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followedToggle={this.props.followedToggle}

            />
        </div>
    }
}

type mapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    followedToggle,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,

})(UsersContainer)