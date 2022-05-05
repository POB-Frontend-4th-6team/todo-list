import styles from './Components.module.scss'
import PropTypes from 'prop-types'

function Container({ children }) {
  return <div className={styles.container}>{children}</div>
}

Container.propTypes = {
  children: PropTypes.func,
}

export default Container
