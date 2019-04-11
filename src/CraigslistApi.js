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
  constructor(clientOptions = { city: 'seattle' }) {
    this.client = new craigslist.Client(clientOptions)
  }

  getListings(options) {
    this.client
      .list()
      .then((listings) => {
        debugger
        listings.forEach((listing) => console.log(listing))
      })
      .catch((err) => console.log)
  }
}


