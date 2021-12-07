import axios from "axios";
import {setUserProfile} from "../Redux/profile-reducer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '1dc21a1e-2046-4bb2-a619-e1d85befa0b5'
    }

})

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(id: number) {
        return instance.post(`follow/${id}`, {},)
            .then(response => response.data)
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    authMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    }
}