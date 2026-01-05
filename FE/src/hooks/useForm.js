import { useState } from 'react'

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

  const handleChange = (field) => (e) => {
    const value = e.target.value
    setValues((prev) => {
      const newValues = { ...prev, [field]: value }
      
      // Validate on change if field has been touched
      if (touched[field] && validators[field]) {
        const error = validators[field](newValues[field], newValues)
        setErrors((prevErrors) => {
          const newErrors = { ...prevErrors, [field]: error }
          
          // Re-validate dependent fields (e.g., confirmPassword when password changes)
          if (field === 'password' && touched.confirmPassword && validators.confirmPassword) {
            newErrors.confirmPassword = validators.confirmPassword(
              newValues.confirmPassword,
              newValues
            )
          }
          
          return newErrors
        })
      }
      
      return newValues
    })
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

