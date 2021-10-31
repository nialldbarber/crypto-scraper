import {Provider} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {store} from './store';
import Homepage from './views/Homepage';

export default function App() {
  return (
    <Provider {...{store}}>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </Router>
    </Provider>
  );
}
