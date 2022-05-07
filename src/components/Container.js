import styles from './Components.module.scss'
import PropTypes from 'prop-types'
import { useSideBarStore } from '../store/SideBarContext'
import { cx } from '../styles'

function Container({ children }) {
  const { isSideOpen } = useSideBarStore()
  return <div className={cx(styles.container, { [styles.showSideBar]: isSideOpen })}>{children}</div>
}

Container.propTypes = {
  children: PropTypes.node,
}

export default Container
