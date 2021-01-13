import ChoreItem from './ChoreItem';
import Nav from './Nav';
import Welcome from './Welcome';
import AddChore from './AddChore';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import './style.css';

function App() {
  return (
    <Router>
      <Nav />
      <div className="chore-list">
        <Switch>
          <Route path='/' exact component= {Welcome} />
          <Route path='/about' component= {Welcome} />
          <Route path='/item' component= {ChoreItem} />
          <Route path='/add' component= {AddChore} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
