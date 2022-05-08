import { useEffect, useState } from 'react'

import { BsTrash, BsCircle } from 'react-icons/bs'

import styles from './HistoryPage.module.scss'
import { cx } from '../../styles'

const TASKS_KEY = 'task'

function FinishedTasks() {
  const [finishedTasks, setFinishedTasks] = useState([])
  const [isEmpty, setIsEmpty] = useState(false)

  const getTasks = () => {
    const localStorageTasks = localStorage.getItem(TASKS_KEY)
    if (localStorageTasks) {
      const localStorageTasksFinished = JSON.parse(localStorageTasks).filter((task) => task.completed)
      setFinishedTasks(localStorageTasksFinished)
    } else {
      setFinishedTasks([])
    }
  }
  const deleteTask = (id) => {
    const localStorageTasks = localStorage.getItem(TASKS_KEY)
    const newTasks = JSON.parse(localStorageTasks).filter((task) => task.id !== id)
    localStorage.setItem(TASKS_KEY, JSON.stringify(newTasks))
    getTasks()
  }
  const handleDeleteBtnClick = (e) => {
    const { id } = e.currentTarget.dataset
    deleteTask(Number(id))
  }
  useEffect(() => {
    !finishedTasks.length ? setIsEmpty(true) : setIsEmpty(false)
  }, [finishedTasks])

  useEffect(() => {
    getTasks()
  }, [])
  return (
    <ul className={styles.tasks}>
      {finishedTasks.map((task) => (
        <li key={`task-key-${task.id}`} className={styles.task}>
          <div className={styles.leftAlign}>
            <BsCircle className={cx(styles.categoryIcon, styles[task.category])} />
            <p className={styles.title}>{task.task}</p>
            <BsTrash className={styles.deleteIcon} data-id={task.id} onClick={handleDeleteBtnClick} />
          </div>
        </li>
      ))}
      {isEmpty ? <p className={styles.emptyMsg}>EMPTY</p> : null}
    </ul>
  )
}

export default FinishedTasks
