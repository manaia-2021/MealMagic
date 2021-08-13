const express = require('express')
const router = express()
const { getIngredientsData } = require('./utils')

module.exports = router

// POST route /findMeAMeal
// This page should display all possible meal selections
// based on the list of ingredients received from the user
router.post('/', (req, res) => {
  const userIngredients = []

  getIngredientsData((err, ingredientsData) => {
    if (err) {
      res.status(500).send(err.message)
      return
    }
    const ingredients = ingredientsData.ingredients // Array of ingredients
    console.log(ingredients)

    // We must get ingredients list from user
    for (let i = 0; i < ingredients.length; i++) {
      const name = ingredients[i]
      console.log(req.body.name)
      console.log(req.body[name])
      if (req.body[name]) {
        userIngredients.push(ingredients[i])
      }
    }
    console.log(userIngredients)
  })

  res.render('meals')

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
