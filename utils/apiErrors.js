import { Alert } from 'react-native'

/**
 * This function accepts any type of value and reduces it to a single
 * string. This is particularly useful for translating objects with
 * nested values into a string.
 * */
export function toMessageString(data) {
  if (typeof data === 'string' || typeof data === 'number') {
    return String(data)
  }
  if (data instanceof Array) {
    return data.map((i) => String(i)).join(', ')
  }
  if (data instanceof Object) {
    let message = ''
    for (const key in data) {
      message += `${key}: ${toMessageString(data[key])}\n`
    }
    return message
  }
}

/**
 * A generic handler for API Errors.
 *
 * Shows Alert.alert notification for response error codes.
 *
 * @param
 * */
export function apiErrorHandler({ apiName = '', enable400Alert = true }) {
  return (error) => {
    const { response } = error

    // Console log for dev debug
    console.log(`${apiName} Error:`, error)

    if (!response) {
      const { message } = error
      if (message != null) {
        Alert.alert('Error', message)
      }
      throw error
    }

    // Show error to user
    if (response.status >= 400 && response.status < 500) {
      // Handle 4xx errors (probably bad user input)
      const { data } = response
      let message = ''

      // Handle common error structures
      if (data.detail) {
        message += `${data.detail}\n`
      } else if (data.non_field_errors) {
        message += `${data.non_field_errors}\n`
      } else {
        message = toMessageString(data)
      }

      if (enable400Alert) {
        Alert.alert('Error', message)
      }

      // Re-raise for further optional error handling
      throw error
    }
    // Generic handling for other errors (ex: 500 errors)
    Alert.alert('Error', 'Something went wrong! Please try again later.')

    // Re-raise for further optional error handling
    throw error
  }
}
