import express from "express";
import { verifyToken } from "../Middleware/verifyToken.js";
import { createTours, deleteTours, getAllTours, getTourById, updateTours } from "../Controllers/tourController.js";

const router = express.Router();

router.post('/create-tours',verifyToken,createTours)
router.get('/getAllTours',getAllTours)
router.get('/getToursById/:id',getTourById)
router.put('/update-tours/:id',updateTours)
router.delete('/delete-tours/:id',deleteTours)

export default router;