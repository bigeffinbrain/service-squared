import React from 'react'
import { mount, shallow} from 'enzyme' 
import EventDetails from '../components/EventDetails'
import { MemoryRouter } from 'react-router-dom'

//{name: 'Puppy Wrangling', description: 'We got a lot of pups that need wrangled', start: '2020-12-25 06:30:00', end: '2020-12-25 13:00:00', creator_id: 1},
describe('EventDetails', () =>{
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
        useParams: () => ({
          eventId: '1',
        })
    }));

  let wrapper
  beforeEach(() => {
    let events= [
          {id: 1, name: 'Puppy Wrangling', description: 'We got a lot of pups that need wrangled', start: '2020-12-25 06:30:00', end: '2020-12-25 13:00:00', creatnameor_id: 1}
        ];
        
    wrapper = mount(
        <MemoryRouter initialEntries={['/events/1']}>
            <EventDetails allCards={events}/>
        </MemoryRouter>
    );

    // wrapper = shallow(
    //     <EventDetails 
    //         allCards={events}
    //         match={{params: {eventId: 1}, isExact: true, path: "", url: ""}}
    //     />
    // )
    

})

  it('renders the wrapper', () => {
    expect(wrapper.exists()).toEqual(true)
  })

  it('renders the name of the event', () => {
    let eventNameDiv = wrapper.find('.event-name')

    console.log(wrapper.debug())


    expect(eventNameDiv.text()).toEqual('Puppy Wrangling')
  })
})
