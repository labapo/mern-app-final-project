import express from "express";
import { getProfiles, createProfile } from "../controllers/profiles.js";

const router = express.Router();

//get profiles
router.get("/profiles", getProfiles);

//create profiles
router.post("/profiles", createProfile);

export default router;
