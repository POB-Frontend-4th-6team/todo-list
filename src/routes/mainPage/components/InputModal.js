import { useState } from 'react'
import styles from './InputModal.module.scss'
import { FiX, FiChevronUp } from 'react-icons/fi'
import { IoMdRadioButtonOn } from 'react-icons/io'
import { cx } from '../../../styles'

const CATEGORY = ['business', 'personal', 'health', 'hobby']
const today = new Date().toISOString().split('T')[0]

function InputModal() {
  const [expirationDate, setExpirationDate] = useState('')
  const [taskTitle, setTaskTitle] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('business')

  const [taskvalid, setTaskvalid] = useState(false)
  const [expirationvalid, setExpirationvalid] = useState(false)

  const handleGetValue = (e) => {
    e.currentTarget.value && setExpirationvalid(false)
    setExpirationDate(e.currentTarget.value)
  }

  const handleSetTask = () => {
    if (!taskTitle) {
      setTaskvalid(true)
    } else if (!expirationDate) {
      setExpirationvalid(true)
    } else {
      const getTask = localStorage.getItem('task')
      const getTaskArr = JSON.parse(getTask)
      const taskId = getTaskArr ? getTaskArr.length + 1 : 1
      const taskObj = {
        id: taskId,
        task: taskTitle,
        category: selectedCategory,
        completed: false,
        expiry_date: expirationDate,
        completed_date: null,
      }

      getTaskArr
        ? localStorage.setItem('task', JSON.stringify([...getTaskArr, taskObj]))
        : localStorage.setItem('task', JSON.stringify([taskObj]))

      setTaskTitle('')
      setExpirationDate('')
      setSelectedCategory('business')
    }
  }

  const onChangeTask = (e) => {
    e.currentTarget.value && setTaskvalid(false)
    setTaskTitle(e.currentTarget.value)
  }

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev)
  }

  const handleSelectedCategory = (e) => {
    setSelectedCategory(e.currentTarget.dataset.category)
    setShowDropdown((prev) => !prev)
  }

  return (
    <div className={styles.inputModal}>
      <button className={styles.closeButton} type='button'>
        <FiX size='20' />
      </button>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          type='text'
          value={taskTitle}
          placeholder='Enter new task'
          onChange={onChangeTask}
        />
        {taskvalid && <div className={styles.taskvalidMessage}>내용을 입력해주세요.</div>}
      </div>
      <div className={styles.datePickerWrapper}>
        <button className={styles.datePicker} type='button'>
          <input
            className={styles.expirationDate}
            type='date'
            value={expirationDate}
            onChange={handleGetValue}
            min={today}
          />
        </button>
        {expirationvalid && <div className={styles.expirationvalidMessage}>만료일을 설정해주세요.</div>}
      </div>
      <div className={styles.categoryWrapper}>
        <button type='button' className={cx(styles.categoryButton, styles[selectedCategory])} onClick={toggleDropdown}>
          <IoMdRadioButtonOn size='25' />
        </button>
        {showDropdown && (
          <ul className={styles.categoryDropdown}>
            {CATEGORY.map((item) => {
              return (
                <li key={`category-${item}`}>
                  <button type='button' onClick={handleSelectedCategory} data-category={item}>
                    {item}
                  </button>
                </li>
              )
            })}
          </ul>
        )}
      </div>

      <button className={styles.newTaskButton} type='submit' onClick={handleSetTask}>
        <span className={styles.newTaskButtonText}>New task</span>
        <span className={styles.newTaskArrowUpIcon}>
          <FiChevronUp size='20' />
        </span>
      </button>
    </div>
  )
}

export default InputModal
