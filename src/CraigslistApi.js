let craigslist = require('node-craigslist')

// let client = null
// function createClient(options = { category: 'cta' }) {
//   return new craigslist.Client(options)
// }

// function getListings(options) {
//   if (!client) {
//     client = createClient()
//   }
// }

export default class CraigslistAPI {
  constructor(clientOptions = null) {
    this.client = new craigslist.Client(clientOptions)
  }

  getListings(callback, options = { city: 'washingtondc', category: 'cta' }) {
    this.client.list(options).then((listings) => {
      let detailsArray = []
      let pricesArray = []
      for (let i = 0; i < 20; i++) {
        detailsArray.push(this.client.details(listings[i]))
        pricesArray.push(listings[i].price)
      }
      Promise.all(detailsArray)
        .then((detailsArray) => {
          let res = detailsArray.map((details, i) => {
            details.price = pricesArray[i]
            return details
          })
          callback(detailsArray)
        })
        .catch((err) => {
          console.error(err)
        })
    })
  }
}
