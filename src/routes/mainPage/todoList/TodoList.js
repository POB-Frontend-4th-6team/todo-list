import { useCallback, useEffect, useState } from 'react'
import Todo from './Todo'
import styles from './TodoList.module.scss'

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

localStorage.setItem('data', JSON.stringify(Tasks))

const nowDate = new Date().toISOString().slice(0, 10)

function TodoList() {
  const [taskState, setTaskState] = useState([])

  // 마운트시 현재 날짜보다 만료일이 작은 값들만 추출 후 state변경
  useEffect(() => {
    let data = localStorage.getItem('data')
    data = JSON.parse(data).filter((task) => new Date(task.expiry_date) > new Date(nowDate))

    localStorage.clear()
    localStorage.setItem('data', JSON.stringify(data))
    setTaskState(data)
  }, [])

  // ChoiceCategory대신 props로 받아온 카테고리값
  let ChoiceCategory = 'all'
  useEffect(() => {
    const data = localStorage.getItem('data')

    if (ChoiceCategory === 'all') setTaskState(JSON.parse(data))
    else setTaskState((prev) => prev.filter((task) => task.category === ChoiceCategory))
  }, [ChoiceCategory])

  const onClick = useCallback((id, completed) => {
    setTaskState((prev) => {
      const targetIndex = prev.findIndex((task) => task.id === Number(id))
      const newList = [...prev]
      newList[targetIndex].completed = !completed

      localStorage.clear()
      localStorage.setItem('data', JSON.stringify(newList))
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

export default TodoList
