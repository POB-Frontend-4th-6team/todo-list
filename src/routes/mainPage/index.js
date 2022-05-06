import styles from './MainPage.module.scss'
import TodoList from './todoList/TodoList'

function MainPage() {
  return (
    <div className={styles.mainPageTodoList}>
      <TodoList />
    </div>
  )
}

export default MainPage
