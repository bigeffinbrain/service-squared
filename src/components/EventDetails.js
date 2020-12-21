import React from 'react';
import { useParams } from 'react-router-dom';
import '../css files/EventDetails.css'

const EventDetails = ({allCards, allPeople, creator}) => {
    // allCards from App.js line 55
    const { eventId } = useParams()
    // eventID is from router from App.js
    const event = allCards.find(e => e.id === Number(eventId))
    const eventInfo = event ? (
        <>
        <div className = 'ifEventExist'>
        <h3 id='event-name'>{event.name}</h3>
        <div id='event-description'><b>Description:</b> {event.description}</div>
        <div id='event-start'><b>Start:</b> {event.start}</div>
        <div id='event-end'><b>End:</b> {event.end}</div>
        <div id='event-creator'><b>Event Creator: </b>{creator[0].name}</div>    
        <div id='event-creatorContact'><b>Event Creator Contact: </b>{creator[0].email}</div>      
        </div> {/* for css: end div for class 'ifEventExist'  */}
        <div className = 'formatting'> 
        {/* 'formatting' class is for css only */}
        <form className='join-event-form'>
            <h3>Sign Up!</h3>
            Rank/Grade:    
            <input id='rank-grade' type='text' placeholder='Enter rank/grade'></input>
            First name: 
            <input id='first-name' type='text' placeholder='Enter first name'></input>
            Last name: 
            <input id='last-name' type='text' placeholder='Enter last name'></input>
            Email: 
            <input id='email' type='text' placeholder='Enter email'></input>
            <button id='submit-btn' type='submit'>Submit</button>
        </form>
        <div className= 'listpeoplename'>
        <h3 >List of people who have already signed up:</h3>
            {    
                allPeople.map(p => {   
                    return(
                        <div> {p.names}</div>        
                    )
                })
            }
        </div> 
        {/* above div is with clssNmae 'listpeoplename' */}
       </div>
       {/* for css: <>above is for placing sign up and peoplelist side to side */}
        </> /* <> is with line 11 */

        
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

export default EventDetails;