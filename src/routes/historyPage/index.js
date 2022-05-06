import FinishedTasks from './FinishedTasks'
import styles from './HistoryPage.module.scss'

function HistoryPage() {
  
  return (
    <div className={styles.historyPage}>
      <div className={styles.leftAlign}>
        <h1>HISTORY</h1>
      </div>

      <div className={styles.leftAlign}>
        <h2>ANALYSIS</h2>
      </div>

      <div className={styles.leftAlign}>
        <h2>FINISHED TASKS</h2>
      </div>
      <FinishedTasks />
      
    </div>
  )
}

export default HistoryPage
