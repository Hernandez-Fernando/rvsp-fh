const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL

console.log(connectionString)
const pool = new Pool({ connectionString: connectionString })

var sql = "SELECT * FROM guests";

pool.query(sql, function(err, result) {
    // If an error occurred...
    if (err) {
        console.log("Error in query: ")
        console.log(err);
    }

    // Log this to the console for debugging purposes.
    console.log("Back from DB with result:");
    console.log(result);


});

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