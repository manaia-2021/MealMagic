const request = require('supertest')
const cheerio = require('cheerio')
const server = require('./server')
const { getIngredientsData, getMealData } = require('./utils')

test('GET / displays home page containing list of ingredients', (done) => {
    request(server)
      .get('/')
      .expect(200)
      .end((err, res) => {
        const $ = cheerio.load(res.text)
        const elems = $('.ingredients')
        expect(elems).not.toBeNull()
        // expect(elems).not.toHaveLength(7)
        expect(err).toBeNull()
        done()
      })
  })

  test('getIngredientsData returns an object with the property of Ingredients containing an array of Ingredients', (done) => {
    getIngredientsData((err, ingredientsData) => {
      expect(err).toBeNull()
      expect(ingredientsData.ingredients).not.toBeNull()
      // expect(puppyData.puppies).toHaveLength(7)
      done()
    })
  })  