const fs = require('fs')
const path = require('path')

module.exports = {
  getIngredients,
  getMealData
}

function getIngredients (callback) {
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