import axios from "axios"

const API_URL = `http://127.0.0.1:8000/api`

axios.defaults.headers.common["Content-Type"] = "multipart/form-data";
axios.defaults.headers.common["Accept"] = "application/json";

const auth = axios.create({
    url: `${API_URL}/auth`
})

const notes = axios.create({
    url: `${API_URL}`
})

const token = localStorage.getItem('token')

export default {
    login : async (data) => auth.post("/login", data).then((r) => r),

    register : async (data) => auth.post('/register', data).then((r) => r.data), 

    logout: async (data) => auth.post('/logout', data, { headers: { Authorization: `Bearer ${token}`}}).then((r) => r.data), 

    user : async () => auth.get("/user", { headers: { Authorization: `Bearer ${token}`}}).then((r) => r.data),

    notes : async () => notes.get("/notes", { headers: { Authorization: `Bearer ${token}`}}).then((r) => r.data),

    create : async (data) => notes.post("/notes", data, { headers: { Authorization: `Bearer ${token}`}}).then((r) => r.data),

    show : async (id) => notes.get(`/notes/${id}`, { headers: { Authorization: `Bearer ${token}`}}).then((r) => r.data),

    update : async (data, id) => notes.put(`/notes/${id}`, data, { headers: { Authorization: `Bearer ${token}`}}).then((r) => r.data),

    delete : async (data, id) => notes.delete(`/notes/${id}`, data, { headers: { Authorization: `Bearer ${token}`}}).then((r) => r.data),

}