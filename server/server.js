const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const {getAllEvents} = require('./get-events.route.js');

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));
app.route('/api/events').get(getAllEvents);

const httpServer = app.listen(9000, () => {
    console.log("HTTP Rest API Server running at" + httpServer.address()["port"]);
})