import { Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './router';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map(({ path, exact, component: Component }, idx) => (
            <Route key={idx} path={path} exact={exact} render={props => <Component {...props} />} />
          ))}
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
