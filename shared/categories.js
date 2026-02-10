/**
 * Shared category constants and validation for Coinfetti
 * Used by both backend and frontend.
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
  HOUSING: '#3B82F6', // Blue
  FOOD: '#F97316', // Orange
  TRANSPORTATION: '#EF4444', // Red
  SHOPPING: '#A855F7', // Purple
  HEALTH: '#10B981', // Green
  ENTERTAINMENT: '#EC4899', // Pink
  EDUCATION: '#8B5CF6', // Purple
  PERSONAL_CARE: '#F59E0B', // Amber
  BILLS: '#6366F1', // Indigo
  TRAVEL: '#06B6D4', // Cyan
  GIFTS: '#F43F5E', // Rose
  FINANCIAL: '#64748B', // Slate
  FAMILY: '#F97316', // Orange
  MISCELLANEOUS: '#6B7280', // Gray
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

