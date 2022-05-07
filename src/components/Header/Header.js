import styles from './Header.module.scss'
import { CgMenu } from 'react-icons/cg'
import { useSideBarStore } from '../../store/SideBarContext'

function Header() {
  const { setIsSideOpen } = useSideBarStore()

  const toggleSideBar = () => {
    setIsSideOpen(true)
  }
  return (
    <div className={styles.container}>
      <CgMenu onClick={toggleSideBar} />
    </div>
  )
}

export default Header
