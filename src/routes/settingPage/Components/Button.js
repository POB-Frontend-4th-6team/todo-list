import styles from './Button.module.scss'
import PropTypes from 'prop-types'

function Button({ children, handleChangeName }) {
  return (
    <button type='button' onClick={handleChangeName} className={styles.button}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  handleChangeName: PropTypes.func,
}

export default Button
