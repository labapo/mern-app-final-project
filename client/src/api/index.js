import axios from "axios";

//backend data url
// const urlUser = "https://social-contact-backend.onrender.com/users"; 
// const urlProfile = "https://social-contact-backend.onrender.com/profiles"
const urlProfile = "http://localhost:8000/profiles"
const urlUser = "http://localhost:8000/users"
//user routes
export const getUser = (id) => axios.get(`${urlUser}/${id}`)
export const getUsers = () => axios.get(urlUser)
export const createUser = (newUser) => axios.post(urlUser, newUser)
export const updateUser = (id, updatedUser) => axios.patch(`${urlUser}/${id}`, updatedUser)
export const deleteUser = (id) => axios.delete(`${urlUser}/${id}`);

// //profile routes
// //needs get 1 profile 
export const getProfile = (id) => axios.get(`${urlProfile}/${id}`)
export const getProfiles = () => axios.get(urlProfile)// I think this is wrong
export const createProfile = (newProfile) => axios.post(urlProfile, newProfile)
export const updateProfile = (id, updatedProfile) => axios.patch(`${urlProfile}/${id}`, updatedProfile)
export const deleteProfile = (id) => {
    console.log("delete profile", id)
    return axios.delete(`${urlProfile}/${id}`);

};
