import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './SettingPage.module.scss'
import Button from './Components/Button'
import LightSpeed from 'react-reveal/LightSpeed'
import avatar from './Components/Avatars/avatar1.png'

function SettingPage() {
  const [userId, setUserId] = useState('iamchho')
  const [username, setUsername] = useState('Chiho Lee')
  const [changeName, setChangeName] = useState(false)
  const [imageIndex, setImageIndex] = useState(undefined)

  // useEffect(() => {
  //   localStorage.setItem('user1', JSON.stringify({ userId: 'iamchho', name: 'Chiho Lee', img_idx: 0 }))
  //   localStorage.setItem('user2', JSON.stringify({ userId: 'songahji', name: 'Songah Park', img_idx: 1 }))
  //   localStorage.setItem('user3', JSON.stringify({ userId: 'dogmaru', name: 'Maru Jung', img_idx: 2 }))
  // }, [])

  useEffect(() => {
    let res = localStorage.getItem('user1')
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
    const getData = JSON.parse(localStorage.getItem('user1'))
    getData.name = username
    localStorage.setItem('user1', JSON.stringify(getData))
  }

  return (
    <div className={styles.container}>
      <LightSpeed right cascade>
        <div className={styles.settingHeader}>
          <header>
            <h1>계정 설정</h1>
            <p>{username}</p>
          </header>
          <div>
            <img src={avatar} className={styles.profile} />
          </div>
        </div>

        <div className={styles.settingInfo}>
          <header>
            <h1>유저 이름</h1>
            {changeName ? (
              <input type='text' placeholder='New Name' value={username} onChange={handleChangeUsername} />
            ) : (
              <p>{username}</p>
            )}
            <h1 className={styles.usernameHeader}>유저 아이디</h1>
            <p>{userId}</p>
          </header>
          <div>
            <Button handler={handleChange}>{changeName ? '저장' : '변경'}</Button>
          </div>
        </div>

        <div className={styles.settingSave}>
          <header>
            <p>
              안전한 Todo 관리를 위해 <br /> <br />
              로그아웃을 해주세요.
            </p>
            <Link to='/' target='_top'>
              <Button handler={handleSaveUsername}>저장 후 나가기</Button>
            </Link>
          </header>
          <div>
            <Link to='/login' target='_top'>
              <Button>로그아웃</Button>
            </Link>
          </div>
        </div>
      </LightSpeed>
    </div>
  )
}

export default SettingPage
