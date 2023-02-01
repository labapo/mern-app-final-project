import mongoose from 'mongoose';
import Profile from '../models/Profile.js'

// export const getProfile = async (req, res) => {
//     try {
//         const userId=req.params.ObjectId
//     } catch (error) {
        
//     }
// }

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
    //create function to get user by ID
    const profile = req.body;
    const newProfile = new Profile(profile);
    // console.log(newProfile);
    try {
        await newProfile.save();
        res.status(201).json(newProfile);
    } catch (error) {
        res.status(409).json({message: error.message})
        
    }
}

export const updateProfile = async (req, res) => {
    //post is coming from the req.body
    const profile = req.body; 
    //extract id from req.params
    //for the id, we're renaming the id after the colon's to '_id' because of that's how it shows in our database
    const { id:_id } = req.params;

    //create a check to see if the id is a mongo id. If it's not valid, then return a 404 message
    if(!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No profile with id: ${id}`);

    //if there is a profile with the id then do this
    //passing profile and specifying that new = true so that we can receive the updated version of that profile
    const updatedProfile = await Profile.findByIdAndUpdate(_id, {...profile,_id}, { new: true});
    //since the right side of the = sign is an asyc action, we have to put in await
    res.json(updatedProfile)
    
}

export const deleteProfile = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Profile with id: ${id}`);
    await Profile.findByIdAndRemove(id);
    res.json({ message: 'Post deleted successfully.'})
}