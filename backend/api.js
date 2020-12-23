const express = require('express')
const app = express()
const port = 3001;
const cors = require('cors')
const parser = require('body-parser')
const knex = require('knex')(require('./knexfile.js')['development']);
//cors policy update
app.use(cors())
app.use(parser.json())

//Root for api server connection testing
app.get('/', (request, response) => {
  response.status(200).send('Successful')
})

//GET endpoint for people assocaited with an event.
app.get('/people/:eventID', (request, response) => {
  let namesArray=[]
  knex('attendees')
    .where({event_id: request.params.eventID})
    .select('person_id')
  .then(data =>{
    console.log(data)
    let dataObj=data;
    knex('people')
      .select('first_name','last_name','id')
    .then(data =>{
      data.forEach(element => {
        dataObj.forEach(namePairs => {
          if(namePairs.person_id == element.id){
            namesArray.push({first_name:element.first_name,last_name:element.last_name})
          }
        });      
      });   
    })
    .then(() => {
      response.status(200).json(namesArray)
    }).catch(err => {
      response.status(400).json({message:`There was an error: ${err}`})
    })
  })
})

//Get endpoint for all events
app.get('/events', (request, response) => {

  knex
    .select('*')
    .from('events')
    .then(data => response.json(data))
    .catch(err =>
      response.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again, but different.'
      }))

})

// post for setting values to an event
app.post('/create-event', (request, response) => {
  let reqbody = request.body
  //console.log(reqbody)
  if (reqbody.name && reqbody.description && reqbody.startDate && reqbody.endDate){
    knex('events')
    .insert({
      name: reqbody.name,
      description: reqbody.description,
      start: reqbody.startDate,
      end: reqbody.endDate,
      creator_id: null,
    }).returning('*')
    .then(data => response.status(200).json(data))
    .catch(err => response.status(400).json({message: `There was an error ${err}`}))
  }
})

// post for setting a volunteer 
app.post('/sign-up', (request, response) => {
  let reqbody = request.body
  console.log(`Im on line 80${JSON.stringify(reqbody)}`)
  if (reqbody.first_name && reqbody.last_name && reqbody.email && reqbody.event_id){
    console.log('Im here on line 82')
     //check if the person exists by email
    knex('people')
    .select('id')
    .where({email: request.body.email})
    .then( data => {
      console.log(`Im on line 87 empty if no email ${JSON.stringify(data)}`)
      if (data.length == 0){
        console.log('This is the case that no email matach was found')
        //if we dont find a person, create a person
        knex('people')
          .insert({
            first_name: reqbody.first_name,
            last_name: reqbody.last_name,
            email: reqbody.email,
          }).returning('*') //* = return whole object within .insert
        .then(data => {
          console.log(`im on line 99${JSON.stringify(data)}`)
          const person_id = data[0].id
          console.log(`this is data.id on line 101 ${data[0].id}`)
          knex('attendees')
            .insert({
              person_id: person_id,
              event_id: reqbody.event_id
            }).returning('*')
            .then(data => response.status(200).json(data))  
        })
      } else {
        //if person exists, just add them to attendees
        
        console.log('We did not enter our if block')
        const person_id = data[0].id
        knex('attendees')
            .insert({
              person_id: person_id,
              event_id: reqbody.event_id
            }).returning('*')
            .then(data => response.status(200).json(data)) 
      }
    })
    
    
        
    //   })
    // )
    // .then(data => response.status(200).json(data))
    // .catch(err => response.status(400).json({message: `There was an error ${err}`}))
  }
})




app.listen(port, () => console.log(`Server up and running @ Localhost:${port}`))