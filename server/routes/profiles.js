import express from "express";
import { getProfiles, createProfile, updateProfile, deleteProfile } from "../controllers/profiles.js";

const router = express.Router();

//get profiles
router.get("/profiles", getProfiles);

//create profile
router.post("/profiles", createProfile);

//update profile
router.patch('/:id', updateProfile)

//delete profile
router.delete('/:id', deleteProfile)

export default router;
