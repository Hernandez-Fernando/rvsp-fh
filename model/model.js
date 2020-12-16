const { Pool } = require('pg');
// const connectionString = process.env.DATABASE_URL
// REMOVE THIS LINE BEFORE DEPLOYING 
const connectionString = 'postgres://juycvdxtmbipba:540b7db27f3db1dbaa917cb95cabc42d1858841e6f7240b4260a39e1a6d28e77@ec2-54-166-114-48.compute-1.amazonaws.com:5432/d5tda5191gg8dl?ssl=true'

const pool = new Pool({ connectionString: connectionString })

function getReservation(code, callback) {
    
    let sql = "SELECT * FROM guests WHERE guestCode =$1::text";
    let params = [code]
    pool.query(sql, params, function(err, result) { 
        if (err) {
            console.log("Error in query: ")
            console.log(err)
        } else {
            let data = result.rows
            callback(data)
        }
    })
}

function confirmReservation(id, callback) {
    
    let sql = "UPDATE guests SET guestAttending = 'Yes' WHERE guestId =$1::int";
    let params = [id]
    pool.query(sql, params, function(err, result) { 
        if (err) {
            console.log("Error in query: ")
            console.log(err)
        } else {
            let data = result.rowCount
            callback(data)
        }
    })
}


function getGuestList(callback) {
    let sql = "SELECT * FROM guests ORDER BY guestName";
    pool.query(sql, function(err, result) { 
        if (err) {
            console.log("Error in query: ")
            console.log(err)
        } else {
            let data = result.rows
            callback(data)
        }
	})
}

function addGuest(name, lastname, code, guests, callback) {
    
    let sql = `INSERT INTO guests VALUES (DEFAULT, '${name}', '${lastname}', '${code}', ${guests}, DEFAULT)`;
    
    pool.query(sql, function(err, result) { 
        if (err) {
            console.log("Error in query: ")
            console.log(err)
        } else {
            let data = result.rowCount
            callback(data)
        }
    })
}

function addUser(name, user, password) {

}

module.exports = {
    getReservation: getReservation,
    getGuestList: getGuestList,
    addGuest: addGuest,
    addUser: addUser,
    confirmReservation: confirmReservation
}