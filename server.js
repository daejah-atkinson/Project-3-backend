require("dotenv").config();

const express = require("express");
require('./config/db.connections')

const app = express();

const PORT = process.env.PORT;

const controllers = require('./controllers');

const cors = require("cors");
const morgan = require("morgan");

///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies
app.use('/clothes', controllers.clothes)
app.use('/todo', controllers.todo)
app.use('/toiletries', controllers.toiletries)
app.use('/misc', controllers.misc)




///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));