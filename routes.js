const express = require('express')
const router = express()
const { getIngredientsData, getMealData } = require('./utils')

module.exports = router

// POST route /findMeAMeal
// This page should display all possible meal selections
// based on the list of ingredients received from the user
router.post('/', (req, res) => {
  const userIngredients = []
  let ingredientsString = ''

  getIngredientsData((err, ingredientsData) => {
    if (err) {
      res.status(500).send(err.message)
      return
    }
    const ingredients = ingredientsData.ingredients // Array of ingredients

    for (let i = 0; i < ingredients.length; i++) {
      const name = ingredients[i]
      if (req.body[name] === 'on') {
        userIngredients.push(ingredients[i])
      }
    }
    console.log(userIngredients)
    ingredientsString = 'My ingredients are ' + userIngredients.toString()
    console.log(ingredientsString)

    // getMealDummy(userIngredients)
  })
  res.render('meals')
})
