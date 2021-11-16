import React, {Component} from 'react';
import {UserType} from "../../Redux/usersReducer";
import styles from './users.module.css'
import axios from 'axios';
import userPhoto from '../../assects/images/user.png'

type UsersType = {
    users: Array<UserType>
    followedToggle: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}

class Users extends Component<UsersType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (

            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                <span>
                   <div>
                       <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.photo}/>
                   </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                                this.props.followedToggle(u.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                this.props.followedToggle(u.id)
                            }}>Unfollow</button>}
                    </div>
                </span>
                        <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                        <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
                    </div>)
                }
            </div>
        );
    }
}

export default Users