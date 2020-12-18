import '../src/css files/App.css';
import { Component } from 'react'
import EventCard from "./components/eventCard";
import { BrowserRouter, Route } from "react-router-dom";



class App extends Component {
  constructor() {
    super()
    this.state = {
      events: [
        {subject:'Event1', info: 'This is Event1', id: 1,},
        {subject:'Event2', info: 'This is Event1', id: 2},
        {subject:'Event2', info: 'This is Event1', id: 2},
        {subject:'Event2', info: 'This is Event1', id: 2},
        {subject:'Event2', info: 'This is Event1', id: 2},
        {subject:'Event2', info: 'This is Event1', id: 2},
        
      ],
      activeEvent: null
    }
  }
  
  render() {
    return(
      <>
        <header class="main-header">
          <button id="home-button">Home</button>
          <h1 id="main-title">Welcome to Service Squared</h1>
          <h6 id="main-title">Since: 2020</h6>
        </header>
        <div class="create-event-area">
          <button id="create-event-button">Create Event</button>
          <h3>These events need your help! Check them out:</h3>
        </div>
        <div class="events-elements-grid">
          <EventCard allCards={this.state.events}/>
        </div>
      </>
    )
  }
}

export default App;
