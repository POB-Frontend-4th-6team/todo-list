import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styles from './Routes.module.scss'

import MainPage from './mainPage'
import LoginPage from './loginPage'
import HistoryPage from './historyPage'
import SettingPage from './settingPage'

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/history' component={HistoryPage} />
          <Route exact path='/setting' component={SettingPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
