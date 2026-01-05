import { useForm } from '../../hooks/useForm'
import { validateEmail, validatePassword } from '../../utils/validation'
import { FORM_PLACEHOLDERS, FORM_LABELS, FORM_MESSAGES } from '../../constants/form'
import { buttonStyles } from '../../constants/styles'
import AuthLayout from '../../components/auth/shared/AuthLayout'
import AuthPanel from '../../components/auth/shared/AuthPanel'
import FormField from '../../components/auth/shared/FormField'
import PasswordInput from '../../components/auth/shared/PasswordInput'

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

          <button type="submit" className={buttonStyles.submit}>
            <span className="relative z-10">{FORM_LABELS.SIGN_IN}</span>
            <div className={buttonStyles.submitHover} />
          </button>
        </form>
      </AuthPanel>
    </AuthLayout>
  )
}

export default Login

