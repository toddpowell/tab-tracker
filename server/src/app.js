console.log("hello");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models');	// Assume there's a models folder that has an index.js file, which returns an object that has a "sequelize" attribute.
const config = require('./config/config')

const app = express();

app.use(morgan('combined')); //logging
app.use(bodyParser.json()); //parse json that comes in
app.use(cors());    // allow any client to access this - needed if you want a server to be hosted on a different domain and to let any client from around the world to hit your server.

// Attaches the endpoints to the application that we pass to it. See routes.js
require('./routes')(app);

// Connect Sequelize to the database that we're configured for and create the tables if they don't exist.
// Then start the server
// sequelize.sync({force: true})
sequelize.sync()
    .then(() => {

        //app.listen(process.env.PORT || 8081);
        app.listen(config.port);
        console.log(`Server started on port ${config.port}`)
    });


