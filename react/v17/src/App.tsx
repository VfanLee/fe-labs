import { Suspense, lazy } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './views/Home.jsx'
const About = lazy(() => import('./views/About.jsx'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
