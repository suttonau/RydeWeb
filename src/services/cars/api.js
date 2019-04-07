import axios from 'axios'
import { apiErrorHandler } from '../../../utils/apiErrors'

// API Endpoints
const CAR_ENDPOINT = ''

export class CarAPI {
  /**
   * Instantiate a new `CarAPI`
   * @param [cls] {class} - The class to use to create objects.
   */
  constructor(cls) {
    this.cls = cls
  }

  /**
   * method to create a new instance of `CarAPI`.
   * @param [cls] {class} - The class to use to create objects.
   * */
  static create(cls) {
    return new CarAPI(cls)
  }

  /**
   * Get List of Cars via the API.
   *
   * @todo - Finish this method
   *
   * @returns {Promise} - Contains the list of `Car` instances.
   */
  async list({ filters = {} } = {}) {
    const filtersMap = {
      // all filters for year, make, model, etc.
    }
    const options = {
      // all sorting options like price, alphabetical, etc.
    }

    return axios
      .get(CAR_ENDPOINT, options)
      .then((resp) => resp.data)
      .then((data) => ({
        ...data,
        results: data.results.map(this.cls.fromAPI)
      }))
      .catch(apiErrorHandler({ apiName: 'List Cars' }))
  }
}
