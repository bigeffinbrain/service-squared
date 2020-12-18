// import from react
import { Component } from 'react'
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link 
} from "react-router-dom";
// import from js
import EventCard from "./components/eventCard";
import CreateEvent from './components/createEvent'
// import from css
import '../src/css files/App.css';
import '../src/css files/cards.css';
import EventDetails from './components/EventDetails'



class App extends Component {
  constructor() {
    super()
    this.state = {
      events: [
        {subject:'Event1', info: 'This is Event1', id: 1},
        {subject:'Event2', info: 'This is Event2', id: 2},
        {subject:'Event3', info: 'This is Event3', id: 3},
        {subject:'Event4', info: 'This is Event4', id: 4},
        {subject:'Event5', info: 'This is Event5', id: 5},
        {subject:'Event6', info: 'This is Event6', id: 6},
      ],
    }
  }
  
  render() {
    return(
      <>
        <Router>
        <header class="main-header">
          <Link to='/'><button id="home-button">Home</button></Link> 
          <h1 id="main-title">Welcome to Service Squared</h1>
          <h6 id="main-title">Since: 2020</h6>
        </header>
          <Switch>
            <Route exact path="/">
              <div class="create-event-area">
                <Link to='/create-event'><button id="create-event-button">Create Event</button></Link>
                  <h3>These events need your help! Check them out:</h3>
              </div>
              <div class="events-elements-grid">
                <EventCard allCards={this.state.events}/>
              </div>
            </Route>

            <Route path='/:eventId'>
              <EventDetails allCards={this.state.events}/>
            </Route>

            <Route path="/event">
              <h1>This is The event detials page.</h1>
            </Route>

            <Route path="/create-event">
              <h1>
                <CreateEvent allCards={this.state.events}/>
              </h1>
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
}

export default App;
