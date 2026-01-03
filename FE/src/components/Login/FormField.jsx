import ErrorMessage from './ErrorMessage'

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
  const inputClasses = `w-full px-4 py-3 bg-pink-50 border-4 outline-none transition-all text-rose-700 font-mono placeholder:text-pink-300/40 ${
    error && touched
      ? 'border-red-400 focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.4)]'
      : 'border-pink-300 focus:border-rose-400 focus:shadow-[0_0_15px_rgba(236,72,153,0.3)]'
  }`

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

