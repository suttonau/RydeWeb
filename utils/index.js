import colors from './colors'
import numbers from './numbers'

export default {
  // Local exports
  isObject,
  sortDataByField,
  isDefined,
  toSnakeCase,
  objectToCamelCase,
  objectToSnakeCase
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

/**
 * @function     objectToCamelCase
 * @description  Transform the string-based keys of a JavaScript object to `camelCase` style notation.
 *               This is useful for translating the style of object keys after making an API call to
 *               the server-based API, which most likely uses `snake_case` style notation by default.
 */
export function objectToCamelCase(value) {
  if (isObject(value)) {
    return Object.keys(value).reduce((acc, snakeKey) => {
      const camelKey = toCamelCase(snakeKey)
      acc[camelKey] = isObject(value[snakeKey])
        ? objectToCamelCase(value[snakeKey])
        : value[snakeKey]
      return acc
    }, {})
  }
}

/**
 * @function     objectToSnakeCase
 * @description Transform the string-based keys of a JavaScript object to `snake_case` notation.
 *              This is useful for translating the `camelCase` style of JavaScript keys BEFORE posting
 *              the data to the server-based API, which most likely uses `snake_case` style notation by default.
 */
export function objectToSnakeCase(value) {
  if (isObject(value)) {
    return Object.keys(value).reduce((acc, camelKey) => {
      const snakeKey = toSnakeCase(camelKey)
      acc[snakeKey] = isObject(value[camelKey])
        ? objectToSnakeCase(value[camelKey])
        : value[camelKey]
      return acc
    }, {})
  }
}

/**
 * @function     toSnakeCase
 * @description  Transform a string value from `camelCase` style notation to `snake_case` notation.
 *               This is useful for translating server-serialized JSON objects to JavaScript objects.
 */
export function toSnakeCase(value) {
  const upperChars = value.match(/([A-Z])/g)

  if (!upperChars) {
    return value
  }

  let str = value.toString()
  for (let i = 0, n = upperChars.length; i < n; i++) {
    str = str.replace(new RegExp(upperChars[i]), `_${upperChars[i].toLowerCase()}`)
  }

  if (str.slice(0, 1) === '_') {
    str = str.slice(1)
  }

  return str
}
