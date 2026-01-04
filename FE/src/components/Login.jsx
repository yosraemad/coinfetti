import { useForm } from '../hooks/useForm'
import { validateEmail, validatePassword } from '../utils/validation'
import { FORM_PLACEHOLDERS, FORM_LABELS, FORM_MESSAGES } from '../constants/form'
import { panelStyles, buttonStyles, titleStyles, linkStyles, layoutStyles } from '../constants/styles'
import LoginBackground from './Login/LoginBackground'
import CornerDecorations from './Login/CornerDecorations'
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
    <div className={layoutStyles.page}>
      <LoginBackground />

      <div className={layoutStyles.content}>
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className={titleStyles.main}>
            COINFETTI
          </h1>
          <div className={titleStyles.subtitle}>
            <span className="animate-pulse">✦</span>
            <span>Finance Tracker</span>
            <span className="animate-pulse">✦</span>
          </div>
        </div>

        {/* Retro Game UI Panel */}
        <div className={panelStyles.container}>
          <CornerDecorations />

          <h2 className={panelStyles.title}>
            ✨ Sign In ✨
          </h2>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
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

            <button type="submit" className={buttonStyles.submit}>
              <span className="relative z-10">{FORM_LABELS.SIGN_IN}</span>
              <div className={buttonStyles.submitHover} />
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className={layoutStyles.footer}>
          <p className="mb-2">{FORM_MESSAGES.NO_ACCOUNT}</p>
          <a href="#" className={linkStyles.signUp}>
            {FORM_LABELS.SIGN_UP}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login
