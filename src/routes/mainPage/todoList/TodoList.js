import { useCallback, useEffect, useState } from 'react'
import Todo from './Todo'
import styles from './TodoList.module.scss'
import PropTypes from 'prop-types'

// 더미 데이터
const Tasks = [
  {
    id: 1,
    task: 'Daily meeting with team',
    category: 'business',
    completed: false,
    expiry_date: new Date().toISOString().slice(0, 10),
    complete_data: new Date().toISOString().slice(0, 10),
  },
  {
    id: 2,
    task: 'Daily meeting with team',
    category: 'personal',
    completed: false,
    expiry_date: new Date(),
    complete_data: new Date(),
  },
  {
    id: 3,
    task: 'Daily',
    category: 'business',
    completed: true,
    expiry_date: new Date(),
    complete_data: new Date(),
  },
  {
    id: 4,
    task: 'Daily meeting with team && Walking',
    category: 'hobby',
    completed: false,
    expiry_date: new Date(),
    complete_data: new Date(),
  },
  {
    id: 5,
    task: 'Daily meeting with team',
    category: 'health',
    completed: false,
    expiry_date: new Date(),
    complete_data: new Date(),
  },
]

localStorage.setItem('task', JSON.stringify(Tasks))

const nowDate = new Date().toISOString().slice(0, 10)

function TodoList({ currentCate }) {
  const [taskState, setTaskState] = useState([])

  // 마운트시 현재 날짜보다 만료일이 작은 값들만 추출 후 state변경
  useEffect(() => {
    let data = localStorage.getItem('task')
    data = JSON.parse(data).filter((task) => new Date(task.expiry_date) > new Date(nowDate))

    localStorage.clear()
    localStorage.setItem('task', JSON.stringify(data))
    setTaskState(data)
  }, [])

  useEffect(() => {
    let data = localStorage.getItem('task')
    data = JSON.parse(data)

    if (currentCate === 'all') setTaskState(data)
    else setTaskState(data.filter((task) => task.category === currentCate))
  }, [currentCate])

  const onClick = useCallback((id, completed) => {
    // 로컬 따로 state따로 값을 변경해야함
    let data = localStorage.getItem('task')
    data = JSON.parse(data)
    const newList = [...data]
    const targetIndex = data.findIndex((task) => task.id === Number(id))
    newList[targetIndex].completed = !completed
    localStorage.clear()
    localStorage.setItem('task', JSON.stringify(newList))

    setTaskState((prev) => {
      const targetIndex = prev.findIndex((task) => task.id === Number(id))
      const newList = [...prev]
      newList[targetIndex].completed = !completed
      return newList
    })
  }, [])

  return (
    <div className={styles.todoListContainer}>
      <div className={styles.todoListHeader}>
        <p className={styles.todoListHeaderTitle}>TODAY&apos;S TASKS</p>
      </div>
      <ul className={styles.todoListMiddle}>
        {taskState.map((Task) => (
          <Todo
            key={`task-${Task.id}`}
            id={Task.id}
            task={Task.task}
            category={Task.category}
            completed={Task.completed}
            onClick={onClick}
          >
            {Task.task}
          </Todo>
        ))}
      </ul>
    </div>
  )
}

TodoList.propTypes = {
  currentCate: PropTypes.string,
}

export default TodoList
