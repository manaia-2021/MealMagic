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
      matchMealsToIngredients(dummyData)
      callback(null, parsedData)
    } catch (parseError) {
      console.error(parseError)
      callback(new Error('Unable to parse the data file'))
    }
  })
}

const dummyData = ['Spaghetti', 'Ground Beef', 'Tomato', 'Cheese', 'Onion']

function matchMealsToIngredients (userInput, callback) {
  getMealData((err, mealData) => {
    if (err) {
      res.status(500).send(err.message)
      return
    }

    mealData.meals.forEach(item => console.log(item.ingredients))

    mealData.meals.forEach(meal => {
      findCommonIngredients(meal.ingredients, userInput)
    })
  })
}

function findCommonIngredients (mealData, userInput) {
  // Loop for array1
  for (let i = 0; i < mealData.length; i++) {
    // Loop for array2
    for (let j = 0; j < userInput.length; j++) {
      // Compare the element of each and
      // every element from both of the
      // arrays
      if (mealData[i] === userInput[j]) {
        // Return if common element found
        console.log('true')
        return true
      }
    }
  }
  // Return if no common element exist
  console.log('false')
  return false
}
