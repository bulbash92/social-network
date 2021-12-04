import axios from "axios";

const instanse = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '1dc21a1e-2046-4bb2-a619-e1d85befa0b5'
    }

})

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(id: number) {
        return instanse.post(`follow/${id}`, {},)
            .then(response => response.data)
    },
    unfollow(id: number) {
        return instanse.delete(`follow/${id}`)
            .then(response => response.data)
    },
    authMe() {
       return  instanse.get(`auth/me`)
            .then(response => response.data)
    }
}