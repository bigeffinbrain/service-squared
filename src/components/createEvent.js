import React from 'react'
import '../css files/cards.css'

class CreateEvent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            startDate: '',
            endDate: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let nam = event.target.name
        let val = event.target.value

        this.setState({
            [nam]: val
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        fetch('http://127.0.0.1:3001/create-event', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
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
        return (
            <div class="create-event-form">
                <form id="event-form" onSubmit={this.handleSubmit}>
                    <input id="name-input" name="name" class="inputField" type="text" placeholder="Event Name" onChange={this.handleChange}/>
                    <input id="desc-input" name="description" class="inputField" type="text" placeholder="Description" onChange={this.handleChange}/>
                    <input id="start-input" name="startDate" class="inputField" type="date" onChange={this.handleChange}/>
                    <input id="end-input" name="endDate" class="inputField" type="date" onChange={this.handleChange}/>
                    <button id="submit-event" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateEvent;















    