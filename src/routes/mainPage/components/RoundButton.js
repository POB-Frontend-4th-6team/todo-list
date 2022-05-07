import PropTypes from 'prop-types'
import styles from './RoundButton.module.scss'

function RoundButton({ children, onClick, className }) {
  return (
    <button type='button' onClick={onClick} className={`${styles.roundButton} ${className}`}>
      {children}
    </button>
  )
}

RoundButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
}

export default RoundButton
