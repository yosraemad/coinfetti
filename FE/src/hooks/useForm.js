import { useState, useEffect, useRef } from 'react'

/**
 * Custom hook for managing form state and validation
 * @param {Object} initialValues - Initial form field values
 * @param {Object} validators - Validation functions for each field
 * @returns {Object} Form state and handlers
 */
export const useForm = (initialValues = {}, validators = {}) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const pendingFieldRef = useRef(null)

  // Update errors when values change, but only for fields that have been changed via handleChange
  // This effect runs after values state updates, so we can use the current values directly
  useEffect(() => {
    if (pendingFieldRef.current === null) return

    const field = pendingFieldRef.current
    
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors }
      
      // Validate on change if field has been touched
      // Use current values state (which already includes the new value)
      if (touched[field] && validators[field]) {
        newErrors[field] = validators[field](values[field], values)
      }
      
      // Re-validate dependent fields (e.g., confirmPassword when password changes)
      if (field === 'password' && touched.confirmPassword && validators.confirmPassword) {
        newErrors.confirmPassword = validators.confirmPassword(
          values.confirmPassword,
          values
        )
      }
      
      return newErrors
    })
    
    // Reset ref after processing
    pendingFieldRef.current = null
  }, [values, touched, validators])

  const handleChange = (field) => (e) => {
    const value = e.target.value
    
    // Store field for the effect to process
    pendingFieldRef.current = field
    
    // Update values - pure updater function with no side effects
    setValues((prevValues) => ({ ...prevValues, [field]: value }))
  }

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    
    if (validators[field]) {
      const error = validators[field](values[field], values)
      setErrors((prev) => ({ ...prev, [field]: error }))
    }
  }

  const validateAll = () => {
    const newErrors = {}
    const newTouched = {}

    Object.keys(validators).forEach((field) => {
      newTouched[field] = true
      if (validators[field]) {
        const error = validators[field](values[field], values)
        if (error) {
          newErrors[field] = error
        }
      }
    })

    setTouched(newTouched)
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
  }

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateAll,
    reset,
  }
}

