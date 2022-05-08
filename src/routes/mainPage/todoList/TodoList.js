import { useCallback, useEffect, useState } from 'react'
import Todo from './Todo'
import styles from './TodoList.module.scss'
import PropTypes from 'prop-types'

const nowDate = new Date().toISOString().slice(0, 10)

function TodoList({ currentCate, modalVisible, taskState, setTaskState }) {
  // 마운트시 현재 날짜보다 만료일이 작은 값들만 추출 후 state변경
  useEffect(() => {
    let data = localStorage.getItem('task')
    data =
      localStorage.getItem('task') === null
        ? []
        : JSON.parse(data).filter((task) => new Date(task.expiry_date) > new Date(nowDate))

    localStorage.removeItem('task')
    localStorage.setItem('task', JSON.stringify(data))
    setTaskState(data)
  }, [modalVisible])

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
    localStorage.removeItem('task')
    localStorage.setItem('task', JSON.stringify(newList))

    setTaskState((prev) => {
      const targetIndex = prev.findIndex((task) => task.id === Number(id))
      const newList = [...prev]
      newList[targetIndex].completed = !completed
      return newList
    })
  }, [])

  const deleteTask = (id) => {
    const localStorageTasks = localStorage.getItem('task')
    const newTasks = JSON.parse(localStorageTasks).filter(task => task.id !== id)
    localStorage.setItem('task',JSON.stringify(newTasks))
    setTaskState(newTasks)
  }

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
            deleteTask={deleteTask}
          >
            {Task.task}
          </Todo>
        ))}
      </ul>
    </div>
  )
}

const taskType = {
  id: PropTypes.number,
  task: PropTypes.string,
  category: PropTypes.string,
  completed: PropTypes.bool,
  expiry_date: PropTypes.string,
  completed_date: PropTypes.string,
}

TodoList.propTypes = {
  currentCate: PropTypes.string,
  modalVisible: PropTypes.bool,
  taskState: PropTypes.arrayOf(PropTypes.shape(taskType)),
  setTaskState: PropTypes.func,
}

export default TodoList
