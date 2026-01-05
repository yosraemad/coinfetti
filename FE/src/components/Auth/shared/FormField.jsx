import ErrorMessage from './ErrorMessage'
import { getInputClasses } from '../../../utils/classNames'

/**
 * Reusable form field component
 */
const FormField = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  touched,
  placeholder,
  children,
}) => {
  const inputClasses = getInputClasses(error && touched)

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-bold text-rose-500 mb-2 tracking-wider">
        {label}
      </label>
      {children || (
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={inputClasses}
          placeholder={placeholder}
        />
      )}
      <ErrorMessage message={error && touched ? error : ''} />
    </div>
  )
}

export default FormField

