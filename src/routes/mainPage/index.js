import { useEffect, useRef, useState } from 'react'
import { cx } from '../../styles/index'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdModeEditOutline } from 'react-icons/md'
import { CgEditBlackPoint } from 'react-icons/cg'

import PropTypes from 'prop-types'
import styles from './MainPage.module.scss'
import buttonStyles from './components/RoundButton.module.scss'
import RoundButton from './components/RoundButton'
import TodoList from './todoList/TodoList'
import TodoCategory from './TodoCategory'
import Header from '../../components/Header/Header'
import InputModal from './components/InputModal'
import TodoList from './todoList/TodoList'

function MainPage() {
  const [currentCate, setCate] = useState('all')
  const [modalVisible, setmodalVisible] = useState(false)

  return (
    <>
      <Header />
      <div className={styles.mainPage}>
        <TodoCategory setCate={setCate} currentCate={currentCate} />
        <div className={styles.mainPageTodoList}>
          <TodoList currentCate={currentCate} />
        </div>
        <FloatButton handleOpenAddModal={setmodalVisible} />
        <InputModal isVisible={modalVisible} handleModalVisible={setmodalVisible} />
      </div>
    </>
  )
}

function FloatButton({ handleOpenAddModal }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const buttonMenuRef = useRef(null)

  const handleOpenClick = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen)
  }

  const handleAddClick = () => {
    setMenuOpen((prev) => !prev)
    handleOpenAddModal(true)
  }

  const handleEditClick = () => {
    setMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (buttonMenuRef.current && !buttonMenuRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [buttonMenuRef])

  return (
    <nav ref={buttonMenuRef}>
      <span className={styles.circularMenu}>
        <RoundButton
          onClick={handleAddClick}
          className={cx({ [buttonStyles.addButtonOpen]: menuOpen }, { [buttonStyles.hideButton]: !menuOpen })}
          aria-label='Add button'
        >
          <AiOutlinePlus size='2em' />
        </RoundButton>
        <RoundButton
          onClick={handleEditClick}
          className={cx({ [buttonStyles.editButtonOpen]: menuOpen }, { [buttonStyles.hideButton]: !menuOpen })}
          aria-label='Edit button'
        >
          <MdModeEditOutline size='1.3em' />
        </RoundButton>
      </span>
      <RoundButton
        onClick={handleOpenClick}
        className={cx(buttonStyles.openMenuButton, { [buttonStyles.bump]: menuOpen })}
        aria-label='Open button'
      >
        <CgEditBlackPoint size='1.5em' />
      </RoundButton>
    </nav>
  )
}

FloatButton.propTypes = {
  handleOpenAddModal: PropTypes.func,
}

export default MainPage
