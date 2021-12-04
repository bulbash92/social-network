import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assects/images/user.png";
import {UserType} from "../../Redux/usersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    users: Array<UserType>
    followedToggle: (userID: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length <= 50) {
            pages.push(i)
        }

    }

    return (

        <div>
            <div>
                {pages.map((p, i )=> {
                    return <span key={i} className={props.currentPage === p ? styles.selectedPage : ''}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}
                    >{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>

                <span>
                   <div>
                       <NavLink to={'/Profile/' + u.id}>
                       <img src={u.photos.small != null ? u.photos.small : userPhoto}
                            className={styles.photo}/>
                       </NavLink>
                   </div>
                    <div>
                        {u.followed ? <button onClick={() => {

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '1dc21a1e-2046-4bb2-a619-e1d85befa0b5'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.followedToggle(u.id)
                                        }
                                    })


                            }}>Unfollow</button>
                            : <button onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '1dc21a1e-2046-4bb2-a619-e1d85befa0b5'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.followedToggle(u.id)
                                        }
                                    })
                            }}>Follow</button>}
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