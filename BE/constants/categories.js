/**
 * Category constants and data structures for Coinfetti
 * Backend-specific schema and filters live here.
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
export { CATEGORY_TYPES, CATEGORY_COLORS, CATEGORY_VALIDATION, isValidCategoryType, isValidColor, DEFAULT_ICONS }
