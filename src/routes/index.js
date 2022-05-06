import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styles from './Routes.module.scss'

import MainPage from './mainPage'
import LoginPage from './loginPage'
import HistoryPage from './historyPage'
import SettingPage from './settingPage'
import Container from '../components/Container'

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Container>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/history' component={HistoryPage} />
            <Route exact path='/setting' component={SettingPage} />
          </Switch>
        </Container>
      </div>
    </Router>
  )
}

export default App
