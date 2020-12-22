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