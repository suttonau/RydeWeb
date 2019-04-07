import colors from './colors'
import numbers from './numbers'

export default {
  // Local exports
  isObject,
  sortDataByField,
  isDefined
}

export {
  // Other exports
  colors,
  numbers
}

/**
 * @function     isObject
 * @description  Check a value whether it is an Object
 */
export function isObject(value) {
  return value !== null && value instanceof Object && !Array.isArray(value)
}

//Sorting function for search bar
export function sortDataByField(data, field) {
  data.sort((a, b) => {
    if (a[field] > b[field]) {
      return 1
    }
    if (a[field] < b[field]) {
      return -1
    }
    return 0
  })
  return data
}

/**
 * @function     isDefined
 * @description  Check whether a value is defined. Helpful for validations in async calls
 * */
export function isDefined(value) {
  return typeof value !== 'undefined'
}
