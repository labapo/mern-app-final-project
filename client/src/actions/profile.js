 import * as api from "../api";
 import { useState } from 'react'
import axios from "axios";

// export const getProfiles = () => async (dispatch) => {
//     try {
//         const { data } = await api.getProfiles();
//         dispatch({ type: "FETCH_ALL", payload: data});
//     } catch (error) {
//         console.log(error)
//     }
// }

// export const createProfile = (profile) => async (dispatch) => {
//     try {
//         const { data } = await api.createProfile(profile)
//         dispatch({ type: "CREATE", payload: data})
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const updateProfile = (id, profile) => async (dispatch) => {
//     try {
//         // returning updated memory or the post
//         const {data} = await api.updateProfile(id, profile);
//         dispatch({type: "UPDATE", payload: data});
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// export const deleteProfile = async (id) => {
//    try {
//     const response = await axios.delete(`/profiles/${id}`);
//     console.log(response);
//     setProfile(prevProfile => prevProfile.filter(profile => profile.id !== id));

//    } catch (error) {
//     console.log(error)
//    }
// }