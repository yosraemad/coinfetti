import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const { user, signOut, loading } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = async () => {
    const { error } = await signOut()
    navigate('/login', { replace: true })
    if (error) {
      console.error('Error signing out:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50 flex items-center justify-center">
        <div className="text-rose-500 font-bold text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-rose-500 tracking-wider">
                COINFETTI
              </h1>
              <p className="text-rose-400 text-sm mt-1">Finance Tracker</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-rose-600 font-semibold">
                {user?.email}
              </span>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-rose-500 text-white font-bold border-2 border-rose-600 hover:bg-rose-600 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main>
          <div className="bg-white/95 border-4 border-pink-400 shadow-[0_0_25px_rgba(236,72,153,0.4),inset_0_0_20px_rgba(251,113,133,0.1)] p-8 relative">
            <div className="absolute top-0 left-0 w-5 h-5 border-t-4 border-l-4 border-pink-400" />
            <div className="absolute top-0 right-0 w-5 h-5 border-t-4 border-r-4 border-pink-400" />
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-4 border-l-4 border-pink-400" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-4 border-r-4 border-pink-400" />
            
            <h2 className="text-2xl font-bold text-rose-500 mb-6 text-center tracking-wider border-b-4 border-rose-300/50 pb-3">
              ✨ Dashboard ✨
            </h2>
            
            <div className="text-center text-rose-600">
              <p className="text-lg">Welcome to your dashboard!</p>
              <p className="text-sm mt-2 text-rose-400">This is where your content will go.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
