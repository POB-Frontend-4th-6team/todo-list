import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

import styles from './LoginPage.module.scss'
import { useUserStore } from '../../store/UserContext'

function LoginPage() {
  const [ID, setID] = useState('')
  const [password, setPassword] = useState('')
  const [isPasswordView, setIsPasswordView] = useState(false)

  const { dispatch } = useUserStore()

  const passwordViewIcon = isPasswordView ? (
    <FaRegEye className={styles.passwordIcon} />
  ) : (
    <FaRegEyeSlash className={styles.passwordIcon} />
  )

  const history = useHistory()

  const onChangeID = (e) => {
    setID(e.target.value)
  }

  const onChangePW = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch({ type: 'CHAMGE_USER', id: ID, name: ID })

    history.replace('/')
    window.location.reload()
  }

  const handlePasswordIcon = () => {
    setIsPasswordView((prev) => !prev)
  }

  return (
    <div className={styles.loginContainer}>
      <header>TODO LIST</header>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputBox}>
          <input placeholder='ID를 입력하시오' value={ID} onChange={onChangeID} />
        </div>
        <div className={styles.inputBox}>
          <input
            placeholder='비밀번호를 입력하시오'
            type={!isPasswordView ? 'password' : ''}
            value={password}
            onChange={onChangePW}
          />
          <button type='button' className={styles.passwordIcon} onClick={handlePasswordIcon}>
            {passwordViewIcon}
          </button>
        </div>
        <button type='submit' className={styles.loginBtn}>
          LOGIN
        </button>
      </form>
    </div>
  )
}

export default LoginPage
