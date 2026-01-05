/**
 * Corner decoration component for retro game UI panels
 */
const CornerDecorations = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-5 h-5 border-t-4 border-l-4 border-pink-400" />
      <div className="absolute top-0 right-0 w-5 h-5 border-t-4 border-r-4 border-pink-400" />
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-4 border-l-4 border-pink-400" />
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-4 border-r-4 border-pink-400" />
    </>
  )
}

export default CornerDecorations

