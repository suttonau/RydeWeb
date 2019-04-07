function shadeRGBColor(color, percent) {
  const f = color.split(',')
  const t = percent < 0 ? 0 : 255
  const p = percent < 0 ? percent * -1 : percent
  const R = parseInt(f[0].slice(4), 10)
  const G = parseInt(f[1], 10)
  const B = parseInt(f[2], 10)
  return `rgb(${Math.round((t - R) * p) + R}, ${Math.round((t - G) * p) + G}, ${Math.round(
    (t - B) * p
  ) + B})`
}

function blendRGBColors(c0, c1, p) {
  const f = c0.split(',')
  const t = c1.split(',')
  const R = parseInt(f[0].slice(4), 10)
  const G = parseInt(f[1], 10)
  const B = parseInt(f[2], 10)
  return `rgb(${Math.round((parseInt(t[0].slice(4), 10) - R) * p) + R}, ${Math.round(
    (parseInt(t[1], 10) - G) * p
  ) + G}, ${Math.round((parseInt(t[2], 10) - B) * p) + B})`
}

/**
 * @function    hexToRgb
 * @description returns color in rgb format.
 * @param       [hex] {string} - Hexadicimal value
 */
function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  const hexadimical = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b
  })
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexadimical)
  return `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
}

function shade(color, percent) {
  const c = color.length < 8 ? hexToRgb(color) : color
  return shadeRGBColor(c, percent)
}

/**
 * @function    darken
 * @description make and returns the darkened color
 * @param       [color] {string} - hex '#XXXXXX', '#xxx' or rgb(xxx, xxx, xxx) color format;
 * @param       [percent] {number} - degree of a color fading(from 0 to 100).
 */
export function darken(color, percent = 0) {
  const fraction = percent / 100
  if (fraction < 0 || fraction > 1) return color
  return shade(color, -fraction)
}

/**
 * @function    lighten
 * @description make and returns the lighted color
 * @param       [color] {string} - hex '#XXXXXX', '#xxx' or rgb(xxx, xxx, xxx) color format;
 * @param       [percent] {number} - degree of a color clarification(from 0 to 100).
 */
export function lighten(color, percent = 0) {
  const fraction = percent / 100
  if (fraction < 0 || fraction > 1) return color
  return shade(color, fraction)
}

/**
 * @function    blend
 * @description mix two colors.
 * @param       [color1] {string} - hex '#XXXXXX', '#xxx' or rgb(xxx, xxx, xxx) color format;
 * @param       [color2] {string} - hex '#XXXXXX', '#xxx' or rgb(xxx, xxx, xxx) color format;
 * @param       [percent] {number} - degree of a color mixing(from 0 to 100).
 */
export function blend(color1, color2, percent) {
  let fraction = percent / 100
  if (fraction < 0 || fraction > 1) fraction = 0
  const col1 = color1.length < 8 ? hexToRgb(color1) : color1
  const col2 = color2.length < 8 ? hexToRgb(color2) : color2
  return blendRGBColors(col1, col2, fraction)
}
