const {Song} = require('../models')

module.exports = {
    async index (req, res) {
        try{
            const songs = await Song.findAll({
                limit: 10
            })
            res.send(songs)
        } catch (err) {
            console.log("ERROR - " + err)
            res.status(500).send({
                error: "An error has occured when trying to get songs"
            })
        }
    },
    async post (req, res) {
        try{
            const song = await Song.create(req.body)
            res.send(song)
        } catch (err) {
            console.log("ERROR - " + err)
            res.status(500).send({
                error: "An error has occured when trying to create song"
            })
        }
    }     
}
