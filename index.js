require('dotenv').config()
const express = require('express')
const session = require('express-session')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()
const controller = require('./controller/controller.js')


// App Settings
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Routing
app.get('/', (req, res) => res.render('pages/index'))
app.get('/admin', (req, res) => res.render('pages/admin'))
app.get('/login', (req, res) => res.render('pages/login'))
app.post('/reservation', controller.getReservation)


app.listen(PORT, () => console.log(`App ready on ${PORT}`))



/*

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

 */