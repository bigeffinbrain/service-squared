import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetails = ({allCards}) => {
    const { eventId } = useParams()
    const event = allCards.find(e => e.id === Number(eventId))

    const eventInfo = event ? (
        <>
        <div>Description: {event.description}</div>
        </>
    ) : <h1>This event is no longer available</h1>


    return (
        <>
            <h1>Event Details</h1>
            {
                eventInfo
            }
        </>
    )
}

export default EventDetails;