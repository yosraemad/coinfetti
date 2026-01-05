import { Link } from 'react-router-dom'
import { titleStyles, layoutStyles, linkStyles } from '../../constants/styles'
import { FORM_MESSAGES } from '../../constants/form'
import LoginBackground from '../Login/LoginBackground'

/**
 * Shared layout component for authentication pages (Login/SignUp)
 */
const AuthLayout = ({ 
  children, 
  footerMessage, 
  footerLinkText, 
  footerLinkTo 
}) => {
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

        {children}

        {/* Footer */}
        <div className={layoutStyles.footer}>
          <p className="mb-2">{footerMessage}</p>
          <Link to={footerLinkTo} className={linkStyles.signUp}>
            {footerLinkText}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout

