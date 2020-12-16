require('dotenv').config()
const express = require('express')
const session = require('express-session')
const bcrypt = require('bcrypt')
const saltRounds = 10
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()
const controller = require('./controller/controller.js')

// REMOVE THIS LINE BEFORE DEPLOYING //
if ("development" == app.get("env")) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

// App Settings
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Routing
app.get('/', (req, res) => res.render('pages/index'))
app.post('/reservation', controller.getReservation)
app.post('/confirmation', controller.confirmReservation)
app.get('/admin', function(req, res) {
    controller.getGuestList(req, res, function (results) {
      let params = {
      guests: results
    }
    res.render('pages/admin', params)
  })
  
})
app.post('/addGuest', controller.addGuest)
app.post('/refreshGuests', controller.getGuestList)
app.get('/login', (req, res) => res.render('pages/login'))



app.listen(PORT, () => console.log(`App ready on ${PORT}`))