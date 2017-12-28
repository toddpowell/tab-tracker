const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')

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
        AuthenticationControllerPolicy.register,    // Do this. Then, the policy file calls next()
        AuthenticationController.register)          // Then this line runs, after next()

    app.post('/login',
        AuthenticationController.login)   

    app.get('/songs',
        SongsController.index)   
    app.post('/songs',
        SongsController.post)         
}