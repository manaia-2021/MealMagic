const express = require('express')
const router = express()
const { getMealData } = require('./utils')

module.exports = router

// GET /findMeAMeal
router.get('/findMeAMeal/:id', (req, res) => {
  getMealData((err, mealData) => {
    if (err) {
      res.status(500).send(err.message)
      return
    }
    const mealID = Number(req.params.id)
    const viewData = mealData.Meals.find(({ id }) => id === mealID)
    res.render('displayMeal', viewData)
  })
})

// // POST route
// router.post('/:id/edit', (req, res) => {
//   const updatedPuppy = {
//     id: req.params.id,
//     name: req.body.name,
//     breed: req.body.breed,
//     owner: req.body.owner
//   }
//   console.log(updatedPuppy)
//   getPuppyData((err, puppyData) => {
//     if (err) {
//       res.status(500).send(err.message)
//       return
//     }
//     const puppyID = Number(req.params.id)
//     const viewData = puppyData.puppies.find(({ id }) => id === puppyID)

// })
