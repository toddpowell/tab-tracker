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
    async show (req, res) {
        try{
            const song = await Song.findById(req.params.songId)
            res.send(song)
        } catch (err) {
            console.log("ERROR - " + err)
            res.status(500).send({
                error: "An error has occured when trying to get song"
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
    },
    async put (req, res) {
        try{
            await Song.update(req.body, {
                where: {
                    id: req.params.songId
                }
            })
            res.send(req.body)
        } catch (err) {
            console.log("ERROR - " + err)
            res.status(500).send({
                error: "An error has occured when trying to update song"
            })
        }
    } 
    // async put (req, res) {
    //     try {
    //       await Song.update(req.body, {
    //         where: {
    //           id: req.params.songId
    //         }
    //       })
    //       res.send(req.body)
    //     } catch (err) {
    //       res.status(500).send({
    //         error: 'an error has occured trying to update the song'
    //       })
    //     }
    //   }         
}
