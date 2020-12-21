import React from 'react'
import '../css files/cards.css'
import { BrowserRouter, Route, Switch, Link, useRouteMatch } from "react-router-dom";

const EventCard = ({ allCards }) => {
    // const match = useRouteMatch()

    const getCards = allCards.length > 0 ? 
        allCards.map(items => {
            return(
                <div id='cards'>
                    <h5>{items.name}</h5>
                    <Link to={`events/${items.id}`}><button>Join Event</button> </Link>
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