/**
 * Category constants and data structures for Coinfetti
 * This file contains the category system structure used across the backend
 */

export const CATEGORY_TYPES = {
  INCOME: 'income',
  EXPENSE: 'expense',
}

export const CATEGORY_COLORS = {
  // Income colors (green shades)
  INCOME_PRIMARY: '#10B981',
  INCOME_SECONDARY: '#059669',
  INCOME_TERTIARY: '#047857',
  INCOME_QUATERNARY: '#065F46',
  
  // Expense colors
  HOUSING: '#3B82F6',      // Blue
  FOOD: '#F97316',         // Orange
  TRANSPORTATION: '#EF4444', // Red
  SHOPPING: '#A855F7',     // Purple
  HEALTH: '#10B981',       // Green
  ENTERTAINMENT: '#EC4899', // Pink
  EDUCATION: '#8B5CF6',    // Purple
  PERSONAL_CARE: '#F59E0B', // Amber
  BILLS: '#6366F1',        // Indigo
  TRAVEL: '#06B6D4',       // Cyan
  GIFTS: '#F43F5E',        // Rose
  FINANCIAL: '#64748B',    // Slate
  FAMILY: '#F97316',      // Orange
  MISCELLANEOUS: '#6B7280', // Gray
}

/**
 * Default category structure
 * This matches the database schema and can be used for validation
 */
export const CATEGORY_SCHEMA = {
  id: 'uuid',
  user_id: 'uuid | null',
  name: 'string',
  type: 'income | expense',
  parent_id: 'uuid | null',
  icon: 'string | null',
  color: 'string | null',
  is_system: 'boolean',
  created_at: 'timestamp',
  updated_at: 'timestamp',
}

/**
 * Category validation rules
 */
export const CATEGORY_VALIDATION = {
  NAME_MAX_LENGTH: 100,
  TYPE_VALUES: [CATEGORY_TYPES.INCOME, CATEGORY_TYPES.EXPENSE],
  ICON_MAX_LENGTH: 50,
  COLOR_PATTERN: /^#[0-9A-Fa-f]{6}$/, // Hex color pattern
}

/**
 * Helper function to validate category type
 */
export const isValidCategoryType = (type) => {
  return CATEGORY_VALIDATION.TYPE_VALUES.includes(type)
}

/**
 * Helper function to validate color format
 */
export const isValidColor = (color) => {
  if (!color) return true // null/undefined is valid
  return CATEGORY_VALIDATION.COLOR_PATTERN.test(color)
}

/**
 * Category query filters structure
 */
export const CATEGORY_FILTERS = {
  BY_USER: 'user_id',
  BY_TYPE: 'type',
  BY_PARENT: 'parent_id',
  BY_SYSTEM: 'is_system',
  MAIN_CATEGORIES_ONLY: 'parent_id IS NULL',
  SUBCATEGORIES_ONLY: 'parent_id IS NOT NULL',
}

/**
 * Default category icons by type
 */
export const DEFAULT_ICONS = {
  INCOME: '💰',
  EXPENSE: '💸',
  HOUSING: '🏠',
  FOOD: '🍔',
  TRANSPORTATION: '🚗',
  SHOPPING: '🛍️',
  HEALTH: '💊',
  ENTERTAINMENT: '🎬',
  EDUCATION: '📚',
  PERSONAL_CARE: '💅',
  BILLS: '📄',
  TRAVEL: '✈️',
  GIFTS: '🎁',
  FINANCIAL: '💼',
  FAMILY: '👨‍👩‍👧',
  MISCELLANEOUS: '📦',
}
