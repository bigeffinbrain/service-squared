const express = require('express')
const app = express()
const port = 3001;

//Root for api server connection testing
app.get('/', (request, response) => {
  response.status(200).send('Successful')
})

// post for setting values to an event
app.post('/create-event', (request, response) => {
  
})

app.listen(port, () => console.log(`Server up and running @ Localhost:${port}`))