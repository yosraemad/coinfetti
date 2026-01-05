import { useForm } from '../../hooks/useForm'
import { validateEmail, validatePassword, validateConfirmPassword } from '../../utils/validation'
import { FORM_PLACEHOLDERS, FORM_LABELS, FORM_MESSAGES } from '../../constants/form'
import { buttonStyles } from '../../constants/styles'
import AuthLayout from '../../components/Auth/shared/AuthLayout'
import AuthPanel from '../../components/Auth/shared/AuthPanel'
import FormField from '../../components/Auth/shared/FormField'
import PasswordInput from '../../components/Auth/shared/PasswordInput'

const SignUp = () => {
  const { values, errors, touched, handleChange, handleBlur, validateAll } = useForm(
    { email: '', password: '', confirmPassword: '' },
    { 
      email: validateEmail, 
      password: validatePassword,
      confirmPassword: validateConfirmPassword
    }
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateAll()) {
      // TODO: Implement sign up logic
      console.log('Sign up attempt:', values)
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

          <button type="submit" className={buttonStyles.submit}>
            <span className="relative z-10">{FORM_LABELS.SIGN_UP}</span>
            <div className={buttonStyles.submitHover} />
          </button>
        </form>
      </AuthPanel>
    </AuthLayout>
  )
}

export default SignUp

