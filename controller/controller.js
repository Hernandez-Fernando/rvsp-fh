const model = require('../model/model.js')

function getReservation(req, res) {
    let code = req.body.code
    model.getReservation(code, function(results) {
        res.json(results)
    })
}


module.exports = {
    getReservation: getReservation
}