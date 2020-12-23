
import React, { Component } from 'react';
import Moment from 'moment';
import { useParams } from 'react-router-dom';
import '../css files/EventDetails.css'
import { withRouter } from "react-router";



class EventDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            people: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const eventId = this.props.match.params.eventId
        fetch(`http://127.0.0.1:3001/people/${eventId}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => this.setState({ people: data }))
            .catch(err => console.log(err))
    }

    handleSubmit(event) {
        event.preventDefault()

        const eventId = this.props.match.params.eventId
        const first_name = document.getElementById('first-name').value
        const last_name = document.getElementById('last-name').value
        const email = document.getElementById('email').value

        fetch('http://127.0.0.1:3001/sign-up', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({first_name:first_name,last_name:last_name,email:email, event_id: eventId}),
          })
          .then(promise => promise.json())
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          })
    }


    render() {
        const eventId = this.props.match.params.eventId
        // eventID is from router from App.js
        const event = this.props.allCards.find(e => e.id === Number(eventId))
        const eventInfo = event ? (
            <>
                    <div className='ifEventExist'>
                        <h3 id='event-name'>{event.name}</h3>
                        <div id='event-description'><b>Description:</b> {event.description}</div>
                        <div id='event-start'><b>Start:</b> {event.start}</div>
                        <div id='event-end'><b>End:</b> {event.end}</div>
                        <div id='event-creator'><b>Event Creator: </b>{this.props.creator[0].name}</div>
                        <div id='event-creatorContact'><b>Event Creator Contact: </b>{this.props.creator[0].email}</div>
                    </div> {/* for css: end div for class 'ifEventExist'  */}
                    <div className='formatting'>
                        {/* 'formatting' class is for css only */}
                <form className='join-event-form' onSubmit={this.handleSubmit}>
                            <h3>Sign Up!</h3>
                    Rank/Grade:
                    <input id='rank-grade' type='text' placeholder='Enter rank/grade'></input>
                    First name:
                    <input id='first-name' name="firstName" type='text' placeholder='Enter first name'></input>
                    Last name:
                    <input id='last-name' name="lastName" type='text' placeholder='Enter last name'></input>
                    Email:
                    <input id='email' name="email" type='text' placeholder='Enter email'></input>
                    <button id='submit-btn' type='submit'>Submit</button>
                </form>
                    <div className='listpeoplename'>
                        <h3 >List of people who have already signed up:</h3>
                        {
                            this.state.people.map(p => {
                                return (
                                    <div> {p.first_name} {p.last_name} {console.log(p)}</div>
                                )
                            })
                        }
                    </div>
                    {/* above div is with clssNmae 'listpeoplename' */}
                </div>
                {/* for css: div above is for 'formatting' */}
            </> /* <> is with line 49 */


        ) : <h1>This event is no longer available</h1>


        return (
            <>
                <h1 className='event-details-header'>Event Details</h1>
                {
                    eventInfo
                }
            </>
        )
    }

}

export default withRouter(EventDetails);