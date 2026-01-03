import express from 'express';

const router = express.Router();

// Example route
router.get('/api', (req, res) => {
  res.json({ 
    message: 'Welcome to Coinfetti API',
    version: '1.0.0'
  });
});

export default router;

