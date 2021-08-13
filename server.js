const express = require('express')
const hbs = require('express-handlebars')
const mealRoutes = require('./routes')

const { getIngredientsData } = require('./utils')

const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

server.use('/findMeAMeal', mealRoutes)

module.exports = server

// GET /
// to display ingredients
server.get('/', (req, res) => {
  getIngredientsData((err, ingredientsData) => {
    if (err) {
      res.status(500).send(err.message)
      return
    }
    const viewData = ingredientsData
    res.render('home', viewData)
  })
})
