import { memo } from 'react'
import { BsTrash } from 'react-icons/bs'

import PropTypes from 'prop-types'

import styles from './Todo.module.scss'
import { cx } from '../../../styles'

function Todo({ id, task, category, completed, onClick, deleteTask }) {
  const handleClick = () => {
    onClick(id, completed)
  }

  const handleDeleteIconClick = () => {
    deleteTask(id)
  }

  return (
    <li className={styles.todoContainer}>
      <div className={styles.checkBox}>
        <button
          className={cx(styles.checkBtn, styles[category], { [styles[`${category}Selected`]]: completed })}
          aria-label='Save'
          type='button'
          onClick={handleClick}
        />
      </div>
      <div className={styles.taskMessageBox}>
        <div className={styles.taskMessage}>
          {task}
          {completed && <div className={styles.taskMessageLine} />}
        </div>
      </div>
      <BsTrash className={styles.deleteIcon} onClick={handleDeleteIconClick} />
    </li>
  )
}

Todo.propTypes = {
  id: PropTypes.number,
  task: PropTypes.string,
  category: PropTypes.string,
  completed: PropTypes.bool,
  onClick: PropTypes.func,
  deleteTask: PropTypes.func,
}

export default memo(Todo)
