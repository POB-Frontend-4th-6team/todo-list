import styles from './SideBar.module.scss'
import { IoIosArrowBack as CloseButton } from 'react-icons/io'
import { BsClockHistory as HistoryIcon } from 'react-icons/bs'
import { FiSettings as SettingsIcon } from 'react-icons/fi'
import { RiLogoutBoxLine as LogoutIcon } from 'react-icons/ri'
import Profile from './Profile'

function SideBar() {
  return (
    <div className={styles.container}>
      <section className={styles.topSection}>
        <Profile />
        <button type='button' className={styles.closeButton}>
          <CloseButton className={styles.closeButtonIcon} />
        </button>
      </section>
      <h2 className={styles.userName}>
        Joy
        <br />
        Mitchell
      </h2>
      <ul className={styles.menuItems}>
        <li className={styles.menuItem}>
          <HistoryIcon className={styles.menuIcon} />
          <span className={styles.menuItemTitle}>History</span>
        </li>
        <li className={styles.menuItem}>
          <SettingsIcon className={styles.menuIcon} />
          <span className={styles.menuItemTitle}>Settings</span>
        </li>
        <li className={styles.menuItem}>
          <LogoutIcon className={styles.menuIcon} />
          <span className={styles.menuItemTitle}>Logout</span>
        </li>
      </ul>
      <section className={styles.bottomSection}>Consistency</section>
    </div>
  )
}

export default SideBar
