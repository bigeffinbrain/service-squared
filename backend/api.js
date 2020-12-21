const express = require('express')
const app = express()
const port = 3001;
const cors = require('cors')
const parser = require('body-parser')

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
  response.status(200)
})

app.listen(port, () => console.log(`Server up and running @ Localhost:${port}`))