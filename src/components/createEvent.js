import React from 'react'
import '../css files/cards.css'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

const CreateEvent = () => {
    return(
        <div class="create-event-form">
            <form id="event-form">
                <input id="name-input" class="inputField" placeholder="Event Name"/>
                <input id="desc-input" class="inputField" placeholder="Description"/>
                <input id="start-input" class="inputField" type="date"/>
                <input id="end-input" class="inputField" type="date"/>
                <button id="submit-event" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CreateEvent;