import mongoose from 'mongoose';
import {Profile} from '../models/Profile'

export const getProfiles = async (req, res) => {
    try {
        const profiles = await Profile.find({});
        //profiles with an s because it becomes an array
        //this turns the user array into json so it can be seen on the front end
        res.status(200).json(profiles)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createProfile = async (req, res) => {
    const profile = req.body;
    const newProfile = new Profile(profile);
    console.log(newProfile);
    try {
        await newProfile.save();
        res.status(201).json(newProfile);
    } catch (error) {
        res.status(409).json({message: error.message})
        
    }
}