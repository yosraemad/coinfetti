/**
 * Category constants and data structures for Coinfetti Frontend
 * This file contains the category system structure used across the frontend
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
 * Category structure type definition (for reference)
 * @typedef {Object} Category
 * @property {string} id - UUID
 * @property {string|null} user_id - User UUID (null for system categories)
 * @property {string} name - Category name
 * @property {'income'|'expense'} type - Category type
 * @property {string|null} parent_id - Parent category UUID (null for main categories)
 * @property {string|null} icon - Icon emoji or identifier
 * @property {string|null} color - Hex color code
 * @property {boolean} is_system - Whether this is a system category
 * @property {string} created_at - ISO timestamp
 * @property {string} updated_at - ISO timestamp
 */

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
 * Helper function to get category color with fallback
 */
export const getCategoryColor = (category, defaultColor = CATEGORY_COLORS.MISCELLANEOUS) => {
  return category?.color || defaultColor
}

/**
 * Helper function to get category icon with fallback
 */
export const getCategoryIcon = (category, defaultIcon = DEFAULT_ICONS.MISCELLANEOUS) => {
  return category?.icon || defaultIcon
}

/**
 * Helper function to check if category is a main category (no parent)
 */
export const isMainCategory = (category) => {
  return !category?.parent_id
}

/**
 * Helper function to check if category is a subcategory (has parent)
 */
export const isSubcategory = (category) => {
  return !!category?.parent_id
}

/**
 * Helper function to check if category is a system category
 */
export const isSystemCategory = (category) => {
  return category?.is_system === true
}

/**
 * Helper function to check if category is user-created
 */
export const isUserCategory = (category) => {
  return category?.is_system === false
}

/**
 * Helper function to filter categories by type
 */
export const filterByType = (categories, type) => {
  return categories.filter(cat => cat.type === type)
}

/**
 * Helper function to get main categories only
 */
export const getMainCategories = (categories) => {
  return categories.filter(cat => !cat.parent_id)
}

/**
 * Helper function to get subcategories for a parent
 */
export const getSubcategories = (categories, parentId) => {
  return categories.filter(cat => cat.parent_id === parentId)
}

/**
 * Helper function to organize categories into hierarchical structure
 * Returns an object with main categories as keys and their subcategories as arrays
 */
export const organizeCategoriesHierarchically = (categories) => {
  const mainCategories = getMainCategories(categories)
  const subcategories = categories.filter(cat => cat.parent_id)
  
  return mainCategories.map(main => ({
    ...main,
    subcategories: getSubcategories(subcategories, main.id)
  }))
}

/**
 * Helper function to get category display name
 * Includes parent name for subcategories if needed
 */
export const getCategoryDisplayName = (category, categories = []) => {
  if (!category) return ''
  
  if (category.parent_id) {
    const parent = categories.find(c => c.id === category.parent_id)
    return parent ? `${parent.name} > ${category.name}` : category.name
  }
  
  return category.name
}
