import {defineStore} from 'pinia'
import api from '../service/api'

export const useApiStore = defineStore({
    id: 'api',
    state: () => ({
        token: localStorage.getItem('token') || null,
        user: null,
        notes: [],
        note: null,
        loggedIn: !!localStorage.getItem('token')
    }),
    actions: {
        async login(data) {
            try{
                const response = await api.login(data)

                this.token = response.data.token
                this.loggedIn = true
                localStorage.setItem("token", response.data.token)
            } catch(error) {
                throw new Error(error.response?.data?.message || "Failed to Login")
            }
        }

    }
})