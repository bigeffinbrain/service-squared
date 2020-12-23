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
  console.log(reqbody)
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




app.listen(port, () => console.log(`Server up and running @ Localhost:${port}`))