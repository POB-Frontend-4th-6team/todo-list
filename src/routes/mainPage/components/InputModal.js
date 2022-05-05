import { useState } from 'react'
import styles from './InputModal.module.scss'
import { FiX, FiChevronUp } from 'react-icons/fi'
import { IoMdRadioButtonOn } from 'react-icons/io'
import classNames from 'classnames/bind'

const CATEGORY = ['BUSINESS', 'PERSONAL', 'HEALTH', 'HOBBY']
const cx = classNames.bind(styles)

function InputModal() {
  const [expirationDate, setExpirationDate] = useState('')
  const [taskTitle, setTaskTitle] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('BUSINESS')
  const [taskId, setTaskId] = useState(0)

  const handleGetValue = (e) => {
    setExpirationDate(e.currentTarget.value)
  }

  const handleSetTask = () => {
    setTaskId(taskId + 1)
    const taskObj = {
      id: taskId,
      task: taskTitle,
      category: selectedCategory,
      completed: false,
      expiry_date: expirationDate,
      complete_date: null,
    }
    window.localStorage.setItem(`task${taskId}`, JSON.stringify(taskObj))
  }

  const onChangeTask = (e) => {
    setTaskTitle(e.currentTarget.value)
  }

  const toggleDropdown = (e) => {
    setShowDropdown((prev) => !prev)
    console.log(e.currentTarget)
  }

  const handleSelectedCategory = (e) => {
    setSelectedCategory(e.currentTarget.dataset.category)
    setShowDropdown((prev) => !prev)
    console.log(e.target)
  }

  return (
    <div className={styles.inputModal}>
      <button className={styles.closeButton} type='button'>
        <FiX size='20' />
      </button>
      <input
        className={styles.input}
        type='text'
        value={taskTitle}
        placeholder='Enter new task'
        onChange={onChangeTask}
      />

      <button className={styles.datePicker} type='button'>
        <input className={styles.expirationDate} type='date' value={expirationDate} onChange={handleGetValue} />
      </button>

      <button className={styles.newTaskButton} type='submit' onClick={handleSetTask}>
        <span className={styles.newTaskButtonText}>New task</span>
        <span className={styles.newTaskArrowUpIcon}>
          <FiChevronUp size='20' />
        </span>
      </button>
      <div className={styles.categoryWrapper}>
        <button type='button' className={cx('categoryButton', selectedCategory.toLowerCase())} onClick={toggleDropdown}>
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
    </div>
  )
}

export default InputModal
