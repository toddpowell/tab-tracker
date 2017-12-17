console.log("hello");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined')); //logging
app.use(bodyParser.json()); //parse json that comes in
app.use(cors());    // allow any client to access this - needed if you want a server to be hosted on a different domain and to let any client from around the world to hit your server.

// Create a simple endpoint
app.get('/status', (req, res) => {
    res.send({
        message: "Hello, world"
    })
})

app.post('/register', (req, res) => {
    res.send({
        message: `Hello, $(req.body.email). Your user was registered.`
    })
})

app.listen(process.env.PORT || 8081);
