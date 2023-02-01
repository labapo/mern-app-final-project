import mongoose from 'mongoose';
import User from '../models/User.js';

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({}).populate("profile");
        //users with an s because it becomes an array
        //this turns the user array into json so it can be seen on the front end
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createUser = async (req, res) => {
    const user = req.body;
    const newUser = new User(user);
    // console.log(newUser);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({message: error.message})
        
    }
}

export const updateUser = async (req, res) => {
    //post is coming from the req.body
    const post = req.body; 
    //extract id from req.params
    //for the id, we're renaming the id after the colon's to '_id' because of that's how it shows in our database
    const { id:_id } = req.params;

    //create a check to see if the id is a mongo id. If it's not valid, then return a 404 message
    if(!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No user with id: ${id}`);

    //if there is a user with the id then do this
    //passing user and specifying that new = true so that we can receive the updated version of that user
    const updatedUser = await User.findByIdAndUpdate(_id, {...user,_id}, { new: true});
    //since the right side of the = sign is an asyc action, we have to put in await
    res.json(updatedUser)
    
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No user with id: ${id}`);
    await User.findByIdAndRemove(id);
    res.json({ message: 'User deleted successfully.'})
}