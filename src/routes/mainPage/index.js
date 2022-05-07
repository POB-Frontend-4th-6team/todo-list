import { useState } from 'react'
import classNames from 'classnames/bind'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdModeEditOutline } from 'react-icons/md'
import { CgEditBlackPoint } from 'react-icons/cg'
import TodoCategory from './TodoCategory'

import styles from './MainPage.module.scss'
import buttonStyles from './components/RoundButton.module.scss'
import RoundButton from './components/RoundButton'

const cx = classNames.bind(buttonStyles)

function MainPage() {
  return <FloatButton />
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
    <>
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
      <TodoCategory />
    </>
  )
}

export default MainPage
