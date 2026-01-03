import { useForm } from '../hooks/useForm'
import { validateEmail, validatePassword } from '../utils/validation'
import { FORM_PLACEHOLDERS, FORM_LABELS, FORM_MESSAGES } from '../constants/form'
import LoginBackground from './Login/LoginBackground'
import FormField from './Login/FormField'
import PasswordInput from './Login/PasswordInput'

const Login = () => {
  const { values, errors, touched, handleChange, handleBlur, validateAll } = useForm(
    { email: '', password: '' },
    { email: validateEmail, password: validatePassword }
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateAll()) {
      // TODO: Implement login logic
      console.log('Login attempt:', values)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-50 flex items-center justify-center p-4 relative overflow-hidden">
      <LoginBackground />

      <div className="w-full max-w-md relative z-10">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 mb-2 drop-shadow-[0_0_15px_rgba(236,72,153,0.4)] tracking-wider">
            COINFETTI
          </h1>
          <div className="flex items-center justify-center gap-2 text-rose-500 font-bold text-sm">
            <span className="animate-pulse">✦</span>
            <span>Finance Tracker</span>
            <span className="animate-pulse">✦</span>
          </div>
        </div>

        {/* Retro Game UI Panel */}
        <div className="bg-white/95 border-4 border-pink-400 shadow-[0_0_25px_rgba(236,72,153,0.4),inset_0_0_20px_rgba(251,113,133,0.1)] p-8 relative">
          {/* Corner decorations - retro game style */}
          <div className="absolute top-0 left-0 w-5 h-5 border-t-4 border-l-4 border-pink-400"></div>
          <div className="absolute top-0 right-0 w-5 h-5 border-t-4 border-r-4 border-pink-400"></div>
          <div className="absolute bottom-0 left-0 w-5 h-5 border-b-4 border-l-4 border-pink-400"></div>
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b-4 border-r-4 border-pink-400"></div>

          <h2 className="text-2xl font-bold text-rose-500 mb-6 text-center tracking-wider border-b-4 border-rose-300/50 pb-3">
            ✨ Sign In ✨
          </h2>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Email Field */}
            <FormField
              id="email"
              label={FORM_LABELS.EMAIL}
              type="text"
              value={values.email}
              onChange={handleChange('email')}
              onBlur={handleBlur('email')}
              error={errors.email}
              touched={touched.email}
              placeholder={FORM_PLACEHOLDERS.EMAIL}
            />

            {/* Password Field */}
            <FormField
              id="password"
              label={FORM_LABELS.PASSWORD}
              error={errors.password}
              touched={touched.password}
            >
              <PasswordInput
                id="password"
                value={values.password}
                onChange={handleChange('password')}
                onBlur={handleBlur('password')}
                error={errors.password}
                touched={touched.password}
                placeholder={FORM_PLACEHOLDERS.PASSWORD}
              />
            </FormField>

            {/* Submit Button - Retro Game Style */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 hover:from-pink-400 hover:via-rose-400 hover:to-fuchsia-400 text-white font-black py-4 px-6 border-4 border-pink-300 shadow-[0_0_20px_rgba(236,72,153,0.4),inset_0_2px_0_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all uppercase tracking-wider text-lg relative overflow-hidden group active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]"
            >
              <span className="relative z-10">{FORM_LABELS.SIGN_IN}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-rose-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-rose-400 font-bold text-sm">
          <p className="mb-2">{FORM_MESSAGES.NO_ACCOUNT}</p>
          <a
            href="#"
            className="text-pink-500 hover:text-fuchsia-500 transition-colors underline decoration-2 underline-offset-4 decoration-pink-300"
          >
            {FORM_LABELS.SIGN_UP}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login
