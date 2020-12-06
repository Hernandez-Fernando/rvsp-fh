const dotenv = require('dotenv').config();
const express = require('express')
const session = require('express-session')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()

const { Pool } = require('pg');
const conString = process.env.DATABASE_URL


const pg = new Pool({ connectionString: conString })


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Routing
app.get('/', (req, res) => res.render('pages/index'))
app.post('/reservation', handleReservation)

const isLogged = function (req, res, next) {
  
}

app.get('/admin', (req, res) => {
  let guests = getGuestList(res);
  console.log(guests)
  res.render('pages/admin', {guests: guests})
})
app.get('/login', (req, res) => res.render('pages/login'))




app.listen(PORT, () => console.log(`App ready on ${PORT}`))


// Controler
function handleReservation(req, res) {
    let rCode = req.body.code
    let data = getReservation(res, rCode)

    // let response = `<ul class="confirmation"><li><p><b>Review your reservation</b></p></li><li><p>Name: <b>${data.rows.guestname} ${data.rows.guestlastname}</b></p></li><li><p>Guests: <b>${data.rows.guestnumber}</b></p></li><li><button class="button" onclick="confirmReservation(${data.rows.id})>Confirm</button></li></ul>`
    res.set('Content-Type', 'application/json')
    res.send(data)
    res.end()
}



// Model
function getReservation(res, rCode) {
    pg.connect(function(err, client, done) {
        if (err) {
          return console.error('error fetching client from pool', err);
        }
        console.log("connected to database");
        client.query(`SELECT * FROM guests WHERE guestCode = '${rCode}'`, function(err, data) {
          done();
          if (err) {
            return console.error('error running query', err);
          }

          res.json(data.rows)
        });
      });
}

function getGuestList(res) {
  pg.connect(function(err, client, done) {
      if (err) {
        return console.error('error fetching client from pool', err);
      }
      console.log("connected to database");
      client.query(`SELECT * FROM guests`, function(err, data) {
        done();
        if (err) {
          return console.error('error running query', err);
        }

        // res.send(data.rows)
      });
    });
}



// Functions

function buildGuestList() {

}