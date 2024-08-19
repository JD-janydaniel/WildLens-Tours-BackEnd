import express  from 'express';
import { createReview, getTourReviews } from '../Controllers/reviewController.js';

const router = express.Router();

router.post('/create-review',createReview);
router.get('/getTourReviews/:id',getTourReviews)

export default router;