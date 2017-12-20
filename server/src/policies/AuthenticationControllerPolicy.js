const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        // Validation
        const schema = {
            email: Joi.string().email(),        // Joi has email format validation
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')    // Alpha/num and 8-32 characters long
            )
        }
        
        const {error, value} = Joi.validate(req.body, schema)   // Validate req.body against our schema

        if (error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: "You must provide a valid email address"
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `The password failed to match the following rules:
                        </br>
                        Must only contain a-Z, A-Z, or numbers
                        </br>
                        Must be 8-32 characters long`
                    })
                    break
                default:
                    res.status(400).send({
                        error: "Invalid registration info"
                    })
                    break
            }
                

        } else {
            next()
        }

    }
}