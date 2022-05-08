import { memo } from 'react'
import { BsTrash } from 'react-icons/bs'

import PropTypes from 'prop-types'

import styles from './Todo.module.scss'
import { cx } from '../../../styles'
// import { FaCheckCircle } from 'react-icons/fa'

function Todo({ id, task, category, completed, onClick, deleteTask, onClickEditList, taskObj }) {
  const handleClick = () => {
    onClick(id, completed)
    console.log(id)
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
        <button type='button' onClick={() => onClickEditList(taskObj)}>
          <div className={styles.taskMessage}>
            {task}
            {completed && <div className={styles.taskMessageLine} />}
          </div>
        </button>
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
  onClickEditList: PropTypes.func,
  taskObj: PropTypes.shape({
    id: PropTypes.number,
    task: PropTypes.string,
    category: PropTypes.string,
    completed: PropTypes.bool,
    expiry_date: PropTypes.string,
    complete_data: PropTypes.string,
  }),
}

export default memo(Todo)
