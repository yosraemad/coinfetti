import express from 'express';
import {
  getCategoriesForUser,
  createUserCategory,
} from '../services/categories.js';

const router = express.Router();

// Simple UUID v4 validator (case-insensitive)
const UUID_V4_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

// GET /api/categories
// Returns system categories + categories for the given user
router.get('/', async (req, res) => {
  try {
    // TODO: replace this with your real auth user id
    // For now, allow user id via query (?userId=...)
    const userId = req.query.userId || null;

    if (!userId) {
      return res.status(400).json({ error: 'userId query parameter is required' });
    }

    if (!UUID_V4_REGEX.test(userId)) {
      return res.status(400).json({ error: 'Invalid userId format' });
    }

    const categories = await getCategoriesForUser(userId);
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

// POST /api/categories
// Creates a new user category
router.post('/', async (req, res) => {
  try {
    // TODO: replace this with your real auth user id
    const userId = req.query.userId || null;

    if (!userId) {
      return res.status(400).json({ error: 'userId query parameter is required' });
    }

    if (!UUID_V4_REGEX.test(userId)) {
      return res.status(400).json({ error: 'Invalid userId format' });
    }

    const categoryData = req.body;
    const newCategory = await createUserCategory(userId, categoryData);

    res.status(201).json(newCategory);
  } catch (error) {
    console.error('Error creating category:', error);
    res.status(500).json({ error: 'Failed to create category' });
  }
});

export default router;

