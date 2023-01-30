import express from 'express';
import { getUsers, createUser } from '../controllers/users.js';

const router = express.Router();

//Get users
router.get('/users', getUsers);
//Create user
router.post('/users', createUser);




export default router; 