import React from 'react';
import { UserType} from "../../Redux/usersReducer";
import styles from './users.module.css'

type UsersType = {
    users: Array<UserType>
    followedToggle :(userID: string) => void
    setUsers: (users:Array<UserType>) => void
}

const Users = (props: UsersType) => {
    if(props.users.length === 0) {
        props.setUsers([])
    }


    return (
        <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                   <div>
                       <img src={u.avatar} className={styles.photo}/>
                   </div>
                    <div>
                        {u.followed ?<button onClick={() => {props.followedToggle(u.id)}}>Follow</button>
                            : <button onClick={() => {props.followedToggle(u.id)}}>Unfollow</button>}
                    </div>
                </span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </div>)
        }
        </div>
    );
};

export default Users;