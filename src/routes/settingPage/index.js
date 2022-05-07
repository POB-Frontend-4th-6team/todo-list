import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './SettingPage.module.scss'
import Button from './Components/Button'
import LightSpeed from 'react-reveal/LightSpeed'
import Header from '../../components/Header/Header'

function SettingPage() {
  const [userId, setUserId] = useState('iamchho')
  const [username, setUsername] = useState('Chiho Lee')
  const [changeName, setChangeName] = useState(false)

  const handleChange = () => {
    setChangeName(!changeName)
  }

  const handleChangeUsername = (e) => {
    setUsername(e.currentTarget.value)
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <LightSpeed right cascade>
          <div className={styles.settingHeader}>
            <header>
              <h1>계정 설정</h1>
              <p>{username}</p>
            </header>
            <div>
              <div className={styles.profile} />
            </div>
          </div>

          <div className={styles.settingInfo}>
            <header>
              <h1>유저 이름</h1>
              {changeName ? (
                <input type='text' placeholder='name' value={username} onChange={handleChangeUsername} />
              ) : (
                <p>{username}</p>
              )}
              <h1 className={styles.usernameHeader}>유저 아이디</h1>
              <p>{userId}</p>
            </header>
            <div>
              <Button handleChangeName={handleChange}>{changeName ? '저장' : '변경'}</Button>
            </div>
          </div>

          <div className={styles.settingSave}>
            <header>
              <p>
                안전한 Todo 관리를 위해 <br /> <br />
                로그아웃을 해주세요.
              </p>
              <Link to='/' target='_top'>
                <Button>저장 후 나가기</Button>
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
    </>
  )
}

export default SettingPage
