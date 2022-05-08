import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './SettingPage.module.scss'
import Button from './Components/Button'
import LightSpeed from 'react-reveal/LightSpeed'
import Shake from 'react-reveal/Shake'
import avatar from './Components/Avatars/avatar1.png'
import Header from '../../components/Header/Header'
import { BsCalendarCheck } from 'react-icons/bs'

function SettingPage() {
  const [userId, setUserId] = useState('')
  const [username, setUsername] = useState('')
  const [changeName, setChangeName] = useState(false)
  const [imageIndex, setImageIndex] = useState(undefined)
  const [userIndex, setUserIndex] = useState(2)

  useEffect(() => {
    localStorage.setItem('user1', JSON.stringify({ userId: 'iamchho', name: 'Chiho Lee', img_idx: 0 }))
    localStorage.setItem('user2', JSON.stringify({ userId: 'songahji', name: 'Songah Park', img_idx: 1 }))
    localStorage.setItem('user3', JSON.stringify({ userId: 'dogmaru', name: 'Maru Jung', img_idx: 2 }))
  }, [])

  useEffect(() => {
    let res = localStorage.getItem(`user${userIndex}`)
    res = JSON.parse(res)

    setUserId((prevId) => res.userId)
    setUsername((prevUsername) => res.name)
    setImageIndex((prevIndex) => res.img_idx)
  }, [])

  const handleChange = () => {
    setChangeName((prevBoolean) => !changeName)
  }

  const handleChangeUsername = (e) => {
    setUsername((prev) => e.target.value)
  }

  const handleSaveUsername = () => {
    const getData = JSON.parse(localStorage.getItem(`user${userIndex}`))
    getData.name = username
    localStorage.setItem('user1', JSON.stringify(getData))
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <LightSpeed right cascade>
          <div className={styles.settingHeader}>
            <header>
              <h1>Account</h1>
              <p>{username}</p>
            </header>
            <img src={avatar} className={styles.profile} />
          </div>

          <div className={styles.settingInfo}>
            <header>
              <h1>Username</h1>
              {changeName ? (
                <input type='text' placeholder='name' value={username} onChange={handleChangeUsername} />
              ) : (
                <p>{username}</p>
              )}
              <h1 className={styles.usernameHeader}>User ID</h1>
              <p>{userId}</p>

              <Link to='/history' target='_top'>
                <h2 className={styles.historyContainer}>
                  <BsCalendarCheck className={styles.calendarIcon} />
                  Check Consistency
                </h2>
              </Link>
            </header>
            <div>
              <Button handler={handleChange}>{changeName ? 'Save' : 'Change'}</Button>
            </div>
          </div>

          <div className={styles.settingSave}>
            <header>
              <p>
                For <span>safe use</span> of App, <br /> <br />
                Please log out.
              </p>
              <Link to='/' target='_top'>
                <Button handler={handleSaveUsername}>Save and Exit</Button>
              </Link>
            </header>
            <div>
              <Link to='/login' target='_top'>
                <Button>Log out</Button>
              </Link>
            </div>
          </div>
        </LightSpeed>
      </div>
    </>
  )
}

export default SettingPage
