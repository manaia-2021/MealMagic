const express = require('express')
const router = express()
const { getMealData } = require('./utils')

module.exports = router

// GET /puppies/details
router.get('/:id', (req, res) => {
  getMealData((err, puppyData) => {
    if (err) {
      res.status(500).send(err.message)
      return
    }
    const puppyID = (req.params.id) - 1
    const viewData = puppyData.puppies[puppyID]
    res.render('details', viewData)
  })
})

// GET /puppies/id/edit
router.get('/:id/edit', (req, res) => {
  getMealData((err, puppyData) => {
    if (err) {
      res.status(500).send(err.message)
      return
    }
    const puppyID = Number(req.params.id)
    const viewData = puppyData.puppies.find(({ id }) => id === puppyID)
    res.render('edit', viewData)
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
