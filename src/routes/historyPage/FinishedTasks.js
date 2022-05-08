import { useEffect, useState } from 'react'
import styles from './HistoryPage.module.scss'
import cx from 'classnames'
import {BsTrash, BsCircle} from 'react-icons/bs'

const TASKS_KEY = 'task'

function FinishedTasks() {
  const [finishedTasks, setFinishedTasks] = useState([])
  const [isEmpty, setIsEmpty] = useState(false)

  const getTasks = () => {
    const localStorageTasks = localStorage.getItem(TASKS_KEY)
    if(localStorageTasks){
      const localStorageTasksFinished = JSON.parse(localStorageTasks).filter(task=>task.completed)
      setFinishedTasks(localStorageTasksFinished)
    }else{
      setFinishedTasks([])
    }
  }
  const deleteTask = (id) => {
    const localStorageTasks = localStorage.getItem(TASKS_KEY)
    const newTask = JSON.parse(localStorageTasks).filter(task => task.id !== id)
    localStorage.setItem(TASKS_KEY,JSON.stringify(newTask))
    getTasks()
  }
  const handleDeleteBtnClick = (e) => {
    const {id} = e.currentTarget.dataset
    deleteTask(Number(id))
  }
  useEffect(()=>{
    !finishedTasks.length?setIsEmpty(true):setIsEmpty(false)
  },[finishedTasks])

  useEffect(()=>{
    getTasks()
  },[])
  return (
    <ul className={styles.tasks}>
      {finishedTasks.map(task=>(
        <li key={`task-key-${task.id}`} className={styles.task}  >
          <div className={styles.leftAlign} >
            <BsCircle className = {cx(styles.categoryIcon, styles[task.category])}/>
            <p className={styles.title}>
              {task.task}
            </p>
            <BsTrash className={styles.deleteIcon} data-id={task.id} onClick = {handleDeleteBtnClick} />
          </div>
        </li>
        ))}
      {isEmpty?<p className={styles.emptyMsg}>완료 일정이 없습니다</p>:null}
    </ul> 
  )
}

export default FinishedTasks