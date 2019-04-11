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

  getListings(options= {city: 'washingtondc', category: 'cta'}) {
    this.client
      .list(options)
      .then((listings) => {
        listings.forEach((listing) => console.log(listing))
      })
      .catch((err) => console.log)
  }
}


