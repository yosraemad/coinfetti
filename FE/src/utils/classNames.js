/**
 * Utility functions for managing className strings
 */

/**
 * Combines class names, filtering out falsy values
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

/**
 * Form input base classes
 */
export const inputBaseClasses = 'w-full px-4 py-3 bg-pink-50 border-4 outline-none transition-all text-rose-700 font-mono placeholder:text-pink-300/40'

/**
 * Form input state classes
 */
export const inputStateClasses = {
  error: 'border-red-400 focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.4)]',
  default: 'border-pink-300 focus:border-rose-400 focus:shadow-[0_0_15px_rgba(236,72,153,0.3)]',
}

/**
 * Get input classes based on error state
 */
export const getInputClasses = (hasError) => {
  return cn(
    inputBaseClasses,
    hasError ? inputStateClasses.error : inputStateClasses.default
  )
}

