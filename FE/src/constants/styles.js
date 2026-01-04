/**
 * Style constants for reusable className strings
 */

export const panelStyles = {
  container: 'bg-white/95 border-4 border-pink-400 shadow-[0_0_25px_rgba(236,72,153,0.4),inset_0_0_20px_rgba(251,113,133,0.1)] p-8 relative',
  title: 'text-2xl font-bold text-rose-500 mb-6 text-center tracking-wider border-b-4 border-rose-300/50 pb-3',
}

export const buttonStyles = {
  submit: 'w-full bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 hover:from-pink-400 hover:via-rose-400 hover:to-fuchsia-400 text-white font-black py-4 px-6 border-4 border-pink-300 shadow-[0_0_20px_rgba(236,72,153,0.4),inset_0_2px_0_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all uppercase tracking-wider text-lg relative overflow-hidden group active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]',
  submitHover: 'absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-rose-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity',
}

export const titleStyles = {
  main: 'text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 mb-2 drop-shadow-[0_0_15px_rgba(236,72,153,0.4)] tracking-wider',
  subtitle: 'flex items-center justify-center gap-2 text-rose-500 font-bold text-sm',
}

export const linkStyles = {
  signUp: 'text-pink-500 hover:text-fuchsia-500 transition-colors underline decoration-2 underline-offset-4 decoration-pink-300',
}

export const layoutStyles = {
  page: 'min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50 flex items-center justify-center p-4 relative overflow-hidden',
  content: 'w-full max-w-md relative z-10',
  footer: 'text-center mt-6 text-rose-400 font-bold text-sm',
}

