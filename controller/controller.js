const model = require('../model/model.js')

function getReservation(req, res) {
    let code = req.body.code
    model.getReservation(code, function(results) {
        res.json(results)
    })
}

function confirmReservation(req, res) {
    let id = req.body.id
    model.confirmReservation(id, function(result) {
        res.json(result)
    })
	}


module.exports = {
    getReservation: getReservation,
		confirmReservation: confirmReservation
}