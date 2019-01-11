import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './Calendar.css';
import './styles/banner.css';
import './styles/pageLayout.css';
import Appointments from './components/Appointments/Appointments';
import Home from './components/Home/Banner';
import About from './components/About/About';
import Offerings from './components/Offerings/Offerings';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Appointments' component={Appointments} />
            <Route path='/Offerings' component={Offerings} />
            <Route path='/About' component={About} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
