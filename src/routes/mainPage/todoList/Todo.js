import styles from './Todo.module.scss'
import PropTypes from 'prop-types'
import { cx } from '../../../styles'
import { FaCheckCircle } from 'react-icons/fa'
import { memo } from 'react'

function Todo({ id, task, category, completed, onClick }) {
  const handleClick = () => {
    onClick(id, completed)
  }

  return (
    <li className={styles.todoContainer}>
      <div className={styles.checkBox}>
        <button
          className={cx(styles.checkBtn, styles[category])}
          aria-label='Save'
          type='button'
          onClick={handleClick}
        />
        {completed && <FaCheckCircle onClick={handleClick} />}
      </div>
      {/* <div className={cx(styles.taskMessage, { [styles.taskMessageCompleted]: completed })}>{task}</div> */}
      <div className={styles.taskMessageBox}>
        <p className={styles.taskMessage}>
          {task}
          {completed && <div className={styles.taskMessageLine} />}
        </p>
      </div>
    </li>
  )
}

Todo.propTypes = {
  id: PropTypes.number,
  task: PropTypes.string,
  category: PropTypes.string,
  completed: PropTypes.bool,
  onClick: PropTypes.func,
}

export default memo(Todo)
