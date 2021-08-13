const fs = require('fs')
const path = require('path')

module.exports = {
  getMealData,
  getIngredientsData
}

function getMealData (callback) {
  const filename = path.join(__dirname, 'data.json')

  fs.readFile(filename, 'utf8', (err, contents) => {
    if (err) {
      console.error(err.message)
      callback(new Error('Unable to load the file'))
      return
    }
    try {
      const parsedData = JSON.parse(contents)
      callback(null, parsedData)
    } catch (parseError) {
      console.error(parseError)
      callback(new Error('Unable to parse the data file'))
    }
  })
}

function getIngredientsData (callback) {
  const filename = path.join(__dirname, 'ingredients.json')

  fs.readFile(filename, 'utf8', (err, contents) => {
    if (err) {
      console.error(err.message)
      callback(new Error('Unable to load the file'))
      return
    }
    try {
      const parsedData = JSON.parse(contents)
      callback(null, parsedData)
    } catch (parseError) {
      console.error(parseError)
      callback(new Error('Unable to parse the data file'))
    }
  })
}

// const dummyData = ["Potato", "Eggs", "Peas", "Carrots", "Lettuce", "Onion", "Rice", "Butter", "Chicken", "Beef mince", "Garlic", "Pasta", "Salt", "Milk", "Cheese"]

// function matchMealsToIngredients (callback) {

//   getMealData((err, mealData) => {
//     if (err) {
//       res.status(500).send(err.message)
//       return
//     }
// }
