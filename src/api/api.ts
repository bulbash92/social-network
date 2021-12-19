import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ef800069-c5f3-467c-9f0b-02d4de59b8ee'
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
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },
    getProfileStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string ) {
        return instance.put('profile/status', {status})
    }

}

export const authApi = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
}