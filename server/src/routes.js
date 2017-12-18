const AuthenticationController = require('./controllers/AuthenticationController')

module.exports = (app) => {
    // Create a simple endpoint
    // app.get('/status', (req, res) => {
    //     res.send({
    //         message: "Hello, world"
    //     })
    // })

    // Moved to AuthenticationController:
    // app.post('/register', (req, res) => {
    //     res.send({
    //         message: `Hello, $(req.body.email). Your user was registered.`
    //     })
    // }) 

    app.post('/register',
        AuthenticationController.register)

}