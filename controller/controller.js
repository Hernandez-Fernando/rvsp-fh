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

function getGuestList(req, res, callback) {

    model.getGuestList(function(result) {
        callback(result)
    })
}

function addGuest(req, res) {
    let guestName = req.body.guestName
    let guestLastname = req.body.guestLastname
    let guestCode = req.body.guestCode
    let guestNumber = req.body.guestNumber

    model.addGuest(guestName, guestLastname, guestCode, guestNumber, function(result) {
        res.json(result)
    })
}


module.exports = {
    getReservation: getReservation,
    confirmReservation: confirmReservation,
    getGuestList: getGuestList,
    addGuest: addGuest
}