const express = require('express')
const hbs = require('express-handlebars')
const mealRoutes = require('./routes')
const { getMealData } = require('./utils')

const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')
// user puppy routes

server.use('/meal', mealRoutes)

module.exports = server

server.get('/', (req, res) => {
  getMealData((err, mealData) => {
    if (err) {
      res.status(500).send(err.message)
      return
    }
    const viewData = mealData
    res.render('home', viewData)
  })
})

server.get('/', (req, res) => {
  res.render('home')
})
