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
        {id: 1, name: 'Puppy Wrangling', description: 'We got a lot of pups that need wrangled', start: '2020-12-25 06:30:00', end: '2020-12-25 13:00:00', creatnameor_id: 1},
        {id: 2, name: 'Dog Wrangling', description: 'We got a lot of pups that need wrangled', start: '2020-12-25 06:30:00', end: '2020-12-25 13:00:00', creatnameor_id: 1},
        {id: 3, name: 'Cat Wrangling', description: 'We got a lot of pups that need wrangled', start: '2020-12-25 06:30:00', end: '2020-12-25 13:00:00', creatnameor_id: 1},
        {id: 4, name: 'People Wrangling', description: 'We got a lot of pups that need wrangled', start: '2020-12-25 06:30:00', end: '2020-12-25 13:00:00', creatnameor_id: 1}
      ],

      people: [
        {names: 'Bob'},
        {names: 'Jeremy'},
        {names: 'Marley'},
        {names: 'Ross'},
      ],

      creator: [
        {name: 'John', email: 'John@yahoo.com'},
      ]
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

            <Route exact path='/events/:eventId'>
              <EventDetails allCards={this.state.events} allPeople={this.state.people} creator={this.state.creator}/>
            </Route>

            <Route exact path="/create-event">
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
