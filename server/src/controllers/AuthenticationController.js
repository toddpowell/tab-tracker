const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

// Helper function to sign a user object using the jwt library to give us back a jwt token
function jwtSignUser (user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
    async register (req, res) {
        try{
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (err) {
            console.log("ERROR - " + err)
            res.status(400).send({
                error: "This email account is already in use"
            })
        }
    },
    async login (req, res) {
        try{
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })

            if (!user) {
                return res.status(403).send ({
                    error: 'The login information was incorrect'
                })
            }

            const isPasswordValid = password === user.password
            // const isPasswordValid = await user.comparePassword(password)

            if (!isPasswordValid) {
                return res.status(403).send ({
                    error: 'The login information was incorrect'
                })                
            }

            const userJson = user.toJSON();
            res.send({
                // user: user.toJSON(),
                // token: jwtSignUser(userJson)
                user: user.toJSON()
            })
        } catch (err) {
            console.log("ERROR - " + err)
            res.status(500).send({
                error: "An error has occured when trying to log in"
            })
        }
    }  
}
