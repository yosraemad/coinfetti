import { panelStyles } from '../../../constants/styles'
import CornerDecorations from './CornerDecorations'

/**
 * Shared panel component for authentication forms
 */
const AuthPanel = ({ title, children }) => {
  return (
    <div className={panelStyles.container}>
      <CornerDecorations />

      <h2 className={panelStyles.title}>
        {title}
      </h2>

      {children}
    </div>
  )
}

export default AuthPanel

