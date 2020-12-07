function getReservation(code, callback) {
    let data = {code: code}
    callback(data)
}

function getGuestList() {

}

function addGuest(name, lastname, code, guests) {

}

function addUser(name, user, password) {

}

module.exports = {
    getReservation: getReservation,
    getGuestList: getGuestList,
    addGuest: addGuest,
    addUser: addUser
}