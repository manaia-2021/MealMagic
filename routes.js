const express = require('express')
const router = express()
const { getIngredientsData, getMealData } = require('./utils')

module.exports = router

// POST route /findMeAMeal
// This page should display all possible meal selections
// based on the list of ingredients received from the user
router.post('/findMeAMeal', (req, res) => {
  let ingredients = []
  getIngredientsData((err, ingredientsData) => {
    if (err) {
      res.status(500).send(err.message)
      return
    }
    ingredients = ingredientsData.ingredients // Array of ingredients
  })
  const userIngredients = []
  // We must get ingredients list from user
  for (let i = 1; i < ingredients.length; i++) {
    const name = ingredients[i]
    if (req.body[name]) {
      userIngredients.push(ingredients[i])
    }
  }

  res.send(userIngredients.toString)

  // We need to have some logic to find what meals can be displayed
  // We render a page with all possible selections
})

// GET /findMeAMeal/id
// This page displays the final meal selection
// router.get('/id', (req, res) => {
//   getMealData((err, mealData) => {
//     if (err) {
//       res.status(500).send(err.message)
//       return
//     }
//     const mealID = Number(req.params.id)
//     const viewData = mealData.Meals.find(({ id }) => id === mealID)
//     res.render('displayMeal', viewData)
//   })
// })
