import axios from "axios";

//backend data url
const url = "http://localhost:8000/"; 

//user routes
export const getUsers = () => axios.get(url)
export const createUser = (newUser) => axios.post(url, newUser)


//profile routes
export const getProfiles = () => axios.get(url)// I think this is wrong
export const createProfile = (newProfile) => axios.post(url, newProfile)
