import ErrorCorners from './ErrorCorners'

/**
 * Reusable error message component with retro game styling
 */
const ErrorMessage = ({ message }) => {
  if (!message) return null

  return (
    <div className="mt-2 px-3 py-2 bg-red-100 border-2 border-red-400 text-red-700 font-bold text-sm tracking-wider relative">
      <ErrorCorners />
      <span className="relative z-10">{message}</span>
    </div>
  )
}

export default ErrorMessage

