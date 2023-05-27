import axios from "axios"

const URL = `http://127.0.0.1:8000/api`

axios.defaults.headers.common["Content-Type"] = "multipart/form-data";
axios.defaults.headers.common["Accept"] = "application/json";


const auth = axios.create({
    baseURL: `${URL}/auth`
})

const notes = axios.create({
    baseURL: `${URL}`
})

const token = localStorage.getItem('token')

export default {
    login : async (data) => auth.post("/login", data).then((r) => r).catch((error) => console.log(error)),

    register : async (data) => auth.post('/register', data).then((r) => r.data), 

    logout: async (data) => auth.post('/logout', data, { headers: { Authorization: `Bearer ${token}`}}).then((r) => r.data), 

    user : async () => auth.get("/user", { headers: { Authorization: `Bearer ${token}`}}).then((r) => r.data),

    notes : async () => notes.get("/notes", { headers: { Authorization: `Bearer ${token}`}}).then((r) => r.data),

    create : async (data) => notes.post("/notes", data, { headers: { Authorization: `Bearer ${token}`}}).then((r) => r.data),

    show : async (id) => notes.get(`/notes/${id}`, { headers: { Authorization: `Bearer ${token}`}}).then((r) => r.data),

    update : async (data, id) => notes.put(`/notes/${id}`, data, { headers: { Authorization: `Bearer ${token}`}}).then((r) => r.data),

    delete : async ( id) => notes.delete(`/notes/${id}`, { headers: { Authorization: `Bearer ${token}`}}).then((r) => r.data),

}