import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Nav from './Nav';
import Welcome from './Welcome';
import ChoreList from './ChoreList';
import AddChore from './AddChore';
import api from './api';
import './style.css';

class App extends React.Component {
  state = { chores: [] }

  updateChores = (chores) => {
    let newState = this.state.chores;
    newState.chores = chores;
    this.setState({ chores })
  };

  render() {
    return (
      <main className='App' >
        <BrowserRouter>
        <Nav />
          <Switch>
            <Route path={'/'} exact component= {Welcome} />
            <Route path={'/about'} component= {Welcome} />
            <Route path={'/chores'} render= {() => 
            <ChoreList chores={this.state.chores} />
          } />
          <Route path={'/add'} render= {() => 
            <AddChore chores={this.state.chores} updateChores={this.updateChores} />
          } />
          </Switch>
        </BrowserRouter>
      </main>
    )
  }

  componentDidMount() {
    return api.getChores()
      .then(chores => {
        this.setState({chores})
      })
      .catch(error => console.log({ error }))
  };
};

export default App;
