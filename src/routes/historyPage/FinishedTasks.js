import { useEffect, useState } from 'react'
import styles from './HistoryPage.module.scss'
import cx from 'classnames'
import {BsTrash, BsCircle} from 'react-icons/bs'

const FINISHED_TODO_LIST = [
  {id:0, task:'abcaaaaaaaaaaaaaaaaaa', category: 'business', completed: true, expiry_date: 1230412304, completed_date: '2022-05-05'},
  {id:1, task:'abcd', category: 'personal', completed: true, expiry_date: 1230412304, completed_date: '2022-05-04'},
  {id:2, task:'abce', category: 'health', completed: true, expiry_date: 1230412304, completed_date: '2022-05-03'},
  {id:3, task:'abcf', category: 'hobby', completed: true, expiry_date: 1230412304, completed_date: '2022-05-02'},
  {id:4, task:'abcg', category: 'abcd', completed: true, expiry_date: 1230412304, completed_date: '2022-05-01'},
  ]
const TASKS_KEY = 'TASK'

function FinishedTasks() {
  const [finishedTasks, setFinishedTasks] = useState(FINISHED_TODO_LIST)
  const getTasks = () => {
    const localStorageTasks = localStorage.getItem(TASKS_KEY)
    if(localStorageTasks){
      const localStorageTasksFinished = JSON.parse(localStorageTasks).filter(task=>task.completed)
      setFinishedTasks(localStorageTasksFinished)
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

  const findCategoryClassname = (category) => {
    switch(category){
      case 'business':
        return styles.business
      case 'personal':
        return styles.personal
      case 'health':
        return styles.health
      case 'hobby':
        return styles.hobby
      default:
        return styles.all
    }
  }
  useEffect(()=>{
    getTasks()
  },[])
  return (
    <ul className={styles.tasks}>
      {finishedTasks.map(task=>(
        <li key={`task-key-${task.id}`} className={styles.task}  >
          <div className={styles.leftAlign} >
            <BsCircle className = {cx(styles.categoryIcon,findCategoryClassname(task.category))}/>
            <p className={styles.title}>
              {task.task}
            </p>
            <BsTrash className={styles.deleteIcon} data-id={task.id} onClick = {handleDeleteBtnClick} />
          </div>
        </li>
        ))}
    </ul> 
  )
}

export default FinishedTasks