import React from 'react'
import { shallow } from 'enzyme' 
import App from './App'
import EventCard from './components/eventCard'

describe('App', () => {
  let appWrapper
  beforeEach(()=>{
    appWrapper = shallow(<App />)
  })

  it('renders a home buttton', () => {
    const homeButton = appWrapper.exists('#home-button')
    
    expect(homeButton).toEqual(true)
  })

  it('renders a create event button', () => {
    const eventButton = appWrapper.exists('#create-event-button')

    expect(eventButton).toEqual(true)
  })

  
  it('renders events', () => {
    const eventButton = appWrapper.exists('EventCard')

    expect(eventButton).toEqual(true)
  })
})