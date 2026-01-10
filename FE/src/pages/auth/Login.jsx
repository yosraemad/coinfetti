import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useAuth } from '../../contexts/AuthContext'
import { validateEmail, validatePassword } from '../../utils/validation'
import { FORM_PLACEHOLDERS, FORM_LABELS, FORM_MESSAGES } from '../../constants/form'
import { buttonStyles } from '../../constants/styles'
import AuthLayout from '../../components/Auth/shared/AuthLayout'
import AuthPanel from '../../components/Auth/shared/AuthPanel'
import FormField from '../../components/Auth/shared/FormField'
import PasswordInput from '../../components/Auth/shared/PasswordInput'
import ErrorMessage from '../../components/Auth/shared/ErrorMessage'

const Login = () => {
  const navigate = useNavigate()
  const { signIn } = useAuth()
  const [submitError, setSubmitError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  
  const { values, errors, touched, handleChange, handleBlur, validateAll } = useForm(
    { email: '', password: '' },
    { email: validateEmail, password: validatePassword }
  )

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError(null)
    
    if (validateAll()) {
      setIsLoading(true)
      try {
        const { data, error } = await signIn(values.email, values.password)
        
        if (error) {
          setSubmitError(error.message)
        } else if (data?.user) {
          // Redirect to dashboard or home page after successful login
          navigate('/dashboard', { replace: true })
        }
      } catch (err) {
        setSubmitError('An unexpected error occurred. Please try again.')
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <AuthLayout
      footerMessage={FORM_MESSAGES.NO_ACCOUNT}
      footerLinkText={FORM_LABELS.SIGN_UP}
      footerLinkTo="/signup"
    >
      <AuthPanel title="✨ Sign In ✨">
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

          {submitError && <ErrorMessage message={submitError} />}
          
          <button 
            type="submit" 
            className={buttonStyles.submit}
            disabled={isLoading}
          >
            <span className="relative z-10">
              {isLoading ? 'Signing in...' : FORM_LABELS.SIGN_IN}
            </span>
            <div className={buttonStyles.submitHover} />
          </button>
        </form>
      </AuthPanel>
    </AuthLayout>
  )
}

export default Login

