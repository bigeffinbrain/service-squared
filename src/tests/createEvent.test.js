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

    it('Displays a Form to the user', () =>{
        //SEAT

        //setup complete

        //exercise
        let form = appWrapper.find('form')
        let fields = appWrapper.find('.inputField')
        let submitButton = appWrapper.find('#submitEvent')

        expect(form.exists()).toBeTruthy();
        expect(fields).toHaveLength(4)
        expect(submitButton.exists()).toBeTruthy()

    })
})