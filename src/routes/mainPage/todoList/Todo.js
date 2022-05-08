import styles from './Todo.module.scss'
import PropTypes from 'prop-types'
import { cx } from '../../../styles'
// import { FaCheckCircle } from 'react-icons/fa'
import { memo } from 'react'
import {BsTrash} from 'react-icons/bs'

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
        {/* {completed && <FaCheckCircle onClick={handleClick} />} */}
      </div>
      {/* <div className={cx(styles.taskMessage, { [styles.taskMessageCompleted]: completed })}>{task}</div> */}
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
  deleteTask: PropTypes.func
}

export default memo(Todo)
