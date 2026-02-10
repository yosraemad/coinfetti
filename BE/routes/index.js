import express from 'express';
import categoriesRouter from './categories.js';

const router = express.Router();

// Base API info
router.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to Coinfetti API',
    version: '1.0.0',
  });
});

// Category routes
// e.g. GET /api/categories?userId=<uuid>
//      POST /api/categories?userId=<uuid>
router.use('/api/categories', categoriesRouter);

export default router;

