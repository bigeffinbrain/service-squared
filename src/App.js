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
import EventDetails from './components/EventDetails'
// import from css
import '../src/css files/App.css';
import '../src/css files/cards.css';




class App extends Component {
  constructor() {
    super()
    this.state = {
      events: [],

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

  componentDidMount() {
    fetch('http://127.0.0.1:3001/events', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => this.setState({events: data}))
    .catch(err => console.log(err))
  }

  render() {
    return(
      <>
        <Router>
        <header class="main-header">
          <div id='home-floater'>
            <Link to='/'><button id="home-button">Home</button></Link> 
          </div>
          <h1 >Service<sup>2</sup></h1>
          <h2 >[Service Squared] Since: 2020</h2>
        </header>
        <div className='main-content'>
          <Switch>
            <Route exact path="/">
              <div class="create-event-area">
                <Link to='/create-event'><button id="create-event-button">Create Event</button></Link>
              </div>
              <div class="events-elements-grid">
                <h1>These events need your help! Check them out:</h1>
                <EventCard allCards={this.state.events}/>
              </div>
            </Route>

            <Route exact path='/events/:eventId'>
              <EventDetails allCards={this.state.events} allPeople={this.state.people} creator={this.state.creator}/>
            </Route>

            <Route exact path="/create-event">
                <CreateEvent allCards={this.state.events}/>
            </Route>
          </Switch>
        </div>

        </Router>
      </>
    )
  }
}

export default App;
