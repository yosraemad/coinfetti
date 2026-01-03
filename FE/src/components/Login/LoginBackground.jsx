/**
 * Background decorations component for Login page
 */
const LoginBackground = () => {
  const sparkles = [
    { emoji: '✨', position: 'top-20 left-20', size: 'text-2xl' },
    { emoji: '⭐', position: 'top-40 right-32', size: 'text-xl', delay: 'delay-300' },
    { emoji: '✨', position: 'bottom-32 left-40', size: 'text-xl', delay: 'delay-700' },
    { emoji: '⭐', position: 'bottom-20 right-20', size: 'text-2xl', delay: 'delay-500' },
  ]

  return (
    <>
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(236, 72, 153, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 72, 153, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Floating sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {sparkles.map((sparkle, index) => (
          <div
            key={index}
            className={`absolute ${sparkle.position} text-pink-400 animate-pulse ${sparkle.delay || ''} ${sparkle.size}`}
          >
            {sparkle.emoji}
          </div>
        ))}
      </div>
    </>
  )
}

export default LoginBackground

