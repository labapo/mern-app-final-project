import express from 'express';
import { getProfiles , createProfile} from "../controllers/profiles"
import router from './users';


//get profiles
router.get('/', getProfiles);

//create profiles 
router.post('/', createProfile);