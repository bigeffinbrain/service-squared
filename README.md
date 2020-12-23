
# README.md

<a href="https://imgbb.com/"><img src="https://i.ibb.co/PMBrphv/2020-12-23-13-48-22-Screen-Shot-2020-12-22-at-5-20-17-PM-png-1266-723.png" alt="2020-12-23-13-48-22-Screen-Shot-2020-12-22-at-5-20-17-PM-png-1266-723" border="0"></a>

![](https://img.shields.io/github/forks/bigeffinbrain/service-squared)
![](https://img.shields.io/github/issues/bigeffinbrain/service-squared)


                    
## API Endpoints
                    
Endpoint  | Contents
------------- | -------------
`/`  |  Connection test
`/people/:eventID`  | GET: Collection of people assocaited with an event id 
`/people/events`  | GET: Collection of all events
`/create-event`  | POST: Create an event 
`/sign-up`  | POST: Sign up for an event


----
## Setup
Clone and install dependencies 
```bash
git clone https://github.com/bigeffinbrain/service-squared.git
```
```bash
npm install
```
Create a postgres database called "service_squared" & run postgres server
```bash
knex migrate:latest
```
```bash
knex seed:run
```
Start Express server & run React app
```bash
cd backend
node api.js
```
```bash
npm run
```




## Database Schema
                    
<a href="https://ibb.co/HCkqmkN"><img src="https://i.ibb.co/zF0ZK08/MVP-database-schema-v2.png" alt="MVP-database-schema-v2" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'></a><br />

## End
