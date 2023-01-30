import mongoose from 'mongoose';
import User from '../models/User.js';

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
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
    console.log(newUser);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({message: error.message})
        
    }
}