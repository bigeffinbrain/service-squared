import React from 'react'
import { shallow } from 'enzyme'
import CreateEvent from '../components/createEvent'

describe('The CreateEvents component', () => {
    let appWrapper
    beforeEach(() => {
        appWrapper = shallow(<CreateEvent />)
    })

    it('Renders a page', () => {
        expect(appWrapper.exists()).toBeTruthy();
    })

    it('Displays a Form to the user with correct fields', () =>{
        //SEAT

        //setup complete

        //exercise
        let form = appWrapper.find('#event-form')
        let nameInput=appWrapper.find('#name-input')
        let descInput=appWrapper.find('#desc-input')
        let startInput=appWrapper.find('#start-input')
        let endInput=appWrapper.find('#end-input')
        let submitButton = appWrapper.find('#submit-event')

        //assert
        expect(form).toHaveLength(1);
        expect(nameInput).toHaveLength(1)
        expect(descInput).toHaveLength(1)
        expect(startInput).toHaveLength(1)
        expect(endInput).toHaveLength(1)
        expect(submitButton).toHaveLength(1)
    })
})