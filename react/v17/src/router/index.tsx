import { Suspense, lazy } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../views/Home'
const About = lazy(() => import('../views/About'))

const AppRouter = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Suspense>
  </Router>
)

export default AppRouter
