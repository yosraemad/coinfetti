/**
 * Category constants and data structures for Coinfetti Frontend
 * Shared constants are imported from the @coinfetti/shared-categories package.
 */

import {
  CATEGORY_TYPES,
  CATEGORY_COLORS,
  DEFAULT_ICONS,
  CATEGORY_VALIDATION,
  isValidCategoryType,
  isValidColor,
} from '@coinfetti/shared-categories'

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

// Re-export shared constants/helpers so existing imports keep working
export {
  CATEGORY_TYPES,
  CATEGORY_COLORS,
  DEFAULT_ICONS,
  CATEGORY_VALIDATION,
  isValidCategoryType,
  isValidColor,
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
