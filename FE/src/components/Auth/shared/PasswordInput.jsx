import { useState } from 'react'
import EyeIcon from '../../ui/icons/EyeIcon'
import EyeOffIcon from '../../ui/icons/EyeOffIcon'
import { getInputClasses } from '../../../utils/classNames'

/**
 * Password input component with visibility toggle
 */
const PasswordInput = ({
  id,
  value,
  onChange,
  onBlur,
  error,
  touched,
  placeholder = '********',
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const inputClasses = `${getInputClasses(error && touched)} pr-12`

  return (
    <div className="relative">
      <input
        id={id}
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={inputClasses}
        placeholder={placeholder}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-rose-400 hover:text-fuchsia-500 focus:outline-none transition-colors"
        aria-label={showPassword ? 'Hide password' : 'Show password'}
      >
        {showPassword ? <EyeOffIcon /> : <EyeIcon />}
      </button>
    </div>
  )
}

export default PasswordInput

