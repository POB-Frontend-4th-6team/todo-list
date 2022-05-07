import styles from './Button.module.scss'
import PropTypes from 'prop-types'

function Button({ children, handler }) {
  return (
    <button type='button' onClick={handler} className={styles.button}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  handler: PropTypes.func,
}

export default Button
