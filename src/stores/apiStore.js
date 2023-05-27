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
                console.log(response.data);
                this.token = response.data.token
                this.loggedIn = true
                localStorage.setItem("token", response.data.token)
            } catch(error) {
                console.log(error)
                throw new Error(error.response?.data?.message || "Failed to Login")
            }
        },
        async register(data) {
            try{
                const response = await api.register(data)

                console.log(response);
                this.token = response.data.token
                this.loggedIn = true
                localStorage.setItem("token", response.data.token)
            } catch(error) {
                throw new Error(error.response?.data?.message || "Failed to Register")
            }
        }, 
        async logout() {
            try{
                const response = await api.logout()

                console.log(response);
                return response
            } catch(error) {
                throw new Error(error.response?.data?.message || "Failed")
            }
        }, 
        async notes() {
            try{
                const response = await api.notes()

                console.log(response);
                return response
            } catch(error) {
                throw new Error(error.response?.data?.message || "Failed")
            }
        },
        async show(id) {
            try{
                const response = await api.show(id)

                console.log(response);
                return response
            } catch(error) {
                throw new Error(error.response?.data?.message || "Failed")
            }
        }, 
        async create(data) {
            try{
                const response = await api.create(data)

                console.log(response);
                return response
            } catch(error) {
                throw new Error(error.response?.data?.message || "Failed")
            }
        }, 
        async update(data, id) {
            try{
                const response = await api.update(data, id)

                console.log(response);
                return response
            } catch(error) {
                throw new Error(error.response?.data?.message || "Failed")
            }
        }, 
        async delete(id) {
            try{
                const response = await api.delete(id)

                console.log(response);
                return response
            } catch(error) {
                throw new Error(error.response?.data?.message || "Failed")
            }
        }, 
        async user() {
            try{
                const response = await api.user()

                console.log(response);
                return response
            } catch(error) {
                throw new Error(error.response?.data?.message || "Failed")
            }
        }

    }
})