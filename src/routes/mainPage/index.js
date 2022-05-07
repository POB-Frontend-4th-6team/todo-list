import { useState } from 'react'
import classNames from 'classnames/bind'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdModeEditOutline } from 'react-icons/md'
import { CgEditBlackPoint } from 'react-icons/cg'

import styles from './MainPage.module.scss'
import buttonStyles from './components/RoundButton.module.scss'
import RoundButton from './components/RoundButton'
import TodoList from './todoList/TodoList'
import TodoCategory from './TodoCategory'
import Header from '../../components/Header/Header'

const cx = classNames.bind(buttonStyles)

function MainPage() {
  const [currentCate, setCate] = useState('all')

  return (
    <>
      <Header />
      <div className={styles.mainPage}>
        <TodoCategory setCate={setCate} currentCate={currentCate} />
        <div className={styles.mainPageTodoList}>
          <TodoList currentCate={currentCate} />
        </div>
        <FloatButton />
      </div>
    </>
  )
}

function FloatButton() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOpenClick = () => {
    setMenuOpen((prev) => !prev)
  }

  const handleAddClick = () => {
    setMenuOpen((prev) => !prev)
  }

  const handleEditClick = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <nav>
      <span className={styles.circularMenu}>
        <RoundButton
          onClick={handleAddClick}
          className={cx(menuOpen ? 'addButtonOpen' : 'addButton')}
          aria-label='Add button'
        >
          <AiOutlinePlus size='2em' />
        </RoundButton>
        <RoundButton
          onClick={handleEditClick}
          className={cx(menuOpen ? 'editButtonOpen' : 'editButton')}
          aria-label='Edit button'
        >
          <MdModeEditOutline size='1.3em' />
        </RoundButton>
      </span>
      <RoundButton onClick={handleOpenClick} className={buttonStyles.openButton} aria-label='Open button'>
        <CgEditBlackPoint size='1.5em' />
      </RoundButton>
    </nav>
  )
}

export default MainPage
