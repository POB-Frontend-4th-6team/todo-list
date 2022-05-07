import styles from './Header.module.scss'
import { CgMenu } from 'react-icons/cg'

function Header() {
  return (
    <div className={styles.container}>
      <CgMenu />
    </div>
  )
}

export default Header
