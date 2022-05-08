import { CgProfile as ProfileImg } from 'react-icons/cg'

import styles from './Profile.module.scss'

function Profile() {
  return (
    <div className={styles.container}>
      <svg width={100} height={100} viewBox='0 0 100 100'>
        <circle fill='none' cx={50} cy={50} r={42} stroke='rgba(91, 125, 177, 0.5)' strokeWidth={2} pathLength={100} />
        <circle
          fill='none'
          cx={50}
          cy={50}
          r={42}
          stroke='#E900FF'
          strokeWidth={2}
          strokeDasharray={100}
          strokeDashoffset={69}
          pathLength={100}
        />
      </svg>
      <div className={styles.profileImgContainer}>
        <ProfileImg className={styles.profileImg} />
      </div>
    </div>
  )
}

export default Profile
