import styles from './HistoryPage.module.scss'
import Header from '../../components/Header/Header'
import FinishedTasks from './FinishedTasks'

function HistoryPage() {
  return (
    <>
      <Header />
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
    </>
  )
}

export default HistoryPage
