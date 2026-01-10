import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useAuth } from '../../contexts/AuthContext'
import { validateEmail, validatePassword, validateConfirmPassword } from '../../utils/validation'
import { FORM_PLACEHOLDERS, FORM_LABELS, FORM_MESSAGES } from '../../constants/form'
import { buttonStyles } from '../../constants/styles'
import AuthLayout from '../../components/Auth/shared/AuthLayout'
import AuthPanel from '../../components/Auth/shared/AuthPanel'
import FormField from '../../components/Auth/shared/FormField'
import PasswordInput from '../../components/Auth/shared/PasswordInput'
import ErrorMessage from '../../components/Auth/shared/ErrorMessage'

const SignUp = () => {
  const navigate = useNavigate()
  const { signUp } = useAuth()
  const [submitError, setSubmitError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState(null)
  
  const { values, errors, touched, handleChange, handleBlur, validateAll } = useForm(
    { email: '', password: '', confirmPassword: '' },
    { 
      email: validateEmail, 
      password: validatePassword,
      confirmPassword: validateConfirmPassword
    }
  )

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError(null)
    setSuccessMessage(null)
    
    if (validateAll()) {
      setIsLoading(true)
      try {
        const { data, error } = await signUp(values.email, values.password)
        
        if (error) {
          setSubmitError(error.message)
        } else if (data?.user) {
          // Check if email confirmation is required
          if (data.user && !data.session) {
            setSuccessMessage('Please check your email to confirm your account before signing in.')
          } else {
            // Auto-logged in, redirect to dashboard
            navigate('/dashboard', { replace: true })
          }
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
      footerMessage={FORM_MESSAGES.HAS_ACCOUNT}
      footerLinkText={FORM_LABELS.SIGN_IN}
      footerLinkTo="/login"
    >
      <AuthPanel title="✨ Sign Up ✨">
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

          <FormField
            id="confirmPassword"
            label={FORM_LABELS.CONFIRM_PASSWORD}
            error={errors.confirmPassword}
            touched={touched.confirmPassword}
          >
            <PasswordInput
              id="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              error={errors.confirmPassword}
              touched={touched.confirmPassword}
              placeholder={FORM_PLACEHOLDERS.CONFIRM_PASSWORD}
            />
          </FormField>

          {submitError && <ErrorMessage message={submitError} />}
          {successMessage && (
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm">
              {successMessage}
            </div>
          )}
          
          <button 
            type="submit" 
            className={buttonStyles.submit}
            disabled={isLoading}
          >
            <span className="relative z-10">
              {isLoading ? 'Creating account...' : FORM_LABELS.SIGN_UP}
            </span>
            <div className={buttonStyles.submitHover} />
          </button>
        </form>
      </AuthPanel>
    </AuthLayout>
  )
}

export default SignUp

