import express from "express";
import { getUsers, createUser, updateUser, deleteUser } from "../controllers/users.js";

const router = express.Router();

//Get users
router.get("/users", getUsers);
//Create user
router.post("/users", createUser);

//update user
// router.patch('/:id', updateUser)

// //delete user
// router.delete('/:id', deleteUser)

export default router;
