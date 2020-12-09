const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL

console.log(connectionString)
const pool = new Pool({ connectionString: connectionString })



function getReservation(code, callback) {
    
    let sql = "SELECT * FROM guests WHERE guestCode =$1::text";
    let params = [code]
    pool.query(sql, params, function(err, result) { 
    if (err) {
        console.log("Error in query: ")
        console.log(err)
    } else {
        // console.log("Back from DB with result:");
        // console.log(result.rows);
        let data = results.rows
        callback(data)
    }
})

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