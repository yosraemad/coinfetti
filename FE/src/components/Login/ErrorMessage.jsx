/**
 * Reusable error message component with retro game styling
 */
const ErrorMessage = ({ message }) => {
  if (!message) return null

  return (
    <div className="mt-2 px-3 py-2 bg-red-100 border-2 border-red-400 text-red-700 font-bold text-sm tracking-wider relative">
      <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-400"></span>
      <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-red-400"></span>
      <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-red-400"></span>
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-400"></span>
      <span className="relative z-10">{message}</span>
    </div>
  )
}

export default ErrorMessage

