/**
 * Corner decorations for error messages
 */
const ErrorCorners = () => {
  return (
    <>
      <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-400" />
      <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-red-400" />
      <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-red-400" />
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-400" />
    </>
  )
}

export default ErrorCorners

