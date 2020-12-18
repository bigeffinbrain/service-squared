import React from 'react'
import '../css files/cards.css'
import { Link, useRouteMatch } from 'react-router-dom'

const EventCard = ({ allCards }) => {
    //const match = useRouteMatch()

    const getCards = allCards.length > 0 ? 
        allCards.map(items => {
            return(
                <div id='cards'>
                    <h5>{items.subject}</h5>
                    <button>Join Event</button> 
                    {/* <Link to={`${match.url}/${items.id}`}>Join Event</Link> */}
                </div>
            )
        }) : <h2>There are no events available at this time.</h2>

    return(
        <>
        {
            getCards
        }
        </>
    )
}

export default EventCard;