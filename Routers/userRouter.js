import express from 'express';
import { deleteUser, updateUser } from '../Controllers/userController.js';
import { verifyToken } from '../Middleware/verifyToken.js';

const router = express.Router();

router.put('/update-user/:id',verifyToken,updateUser);
router.delete('/delete-user/:id',verifyToken,deleteUser); 

export default router;