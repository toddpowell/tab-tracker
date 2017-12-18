// Connect to database
const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {};

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

// Helper function that allows us to easily add more models down the road.
// Process each model found in the models folder
fs
    .readdirSync(__dirname)     // Read the directory
    .filter((file) =>
        file !== 'index.js'     // Ignore the index file
    )
    .forEach((file) => {        // Process all other files
        const model = sequelize.import(path.join(__dirname, file))  // Add the model to the database
    })

// Set up vars that will be useful elsewhere
db.sequelize = sequelize
db.Sequelize = sequelize

module.exports = db

