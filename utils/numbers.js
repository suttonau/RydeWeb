/**
 * function for formatting number to string with separating by thousands.
 *
 * @param       number {number, string} - number which will be formatted.
 * @param       separator {string} - separator parts of number, default - comma.
 *
 * @return      {string}
 */
export function formatNumberToStringWithSeparator(number, separator = ',') {
  if (['number', 'string'].includes(typeof number)) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
  }
  return 'Invalid type of "number" argument'
}

// Format a Number in US Dollars
export function formatNumberAsUSD(value) {
  if (!value && value !== 0) return ''
  return `$${formatNumberToStringWithSeparator(Number(value).toFixed(2))}`
}

// Hack of above function to remove trailing decimal places
export function formatNumberAsUSDNoDecimal(value) {
  if (!value && value !== 0) return ''
  return `$${formatNumberToStringWithSeparator(Number(value).toFixed(0))}`
}
