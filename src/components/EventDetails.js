import React from 'react';
import { useParams } from 'react-router-dom';
import '../css files/EventDetails.css'

const EventDetails = ({allCards}) => {
    // allCards from App.js line 55
    const { eventId } = useParams()
    // eventID is from router from App.js
    const event = allCards.find(e => e.id === Number(eventId))

    const eventInfo = event ? (
        <>
        <h3 id='event-name'>{event.name}</h3>
        <div id='event-description'>Desciption: {event.description}</div>
        <div id='event-start'>Start: {event.start}</div>
        <div id='event-end'>End: {event.end}</div>
        </>
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