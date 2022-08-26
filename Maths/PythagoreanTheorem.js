/**
 * @function calcHypotenuse
 * @description Calculate the hypothenuse of a triangle.
 * @param {Integer} base - Integer
 * @param {Integer} adjacent - Integer
 * @return {Integer} - hypotenuse
 * @see [calcHypotenuse](https://en.wikipedia.org/wiki/Pythagorean_theorem)
 * @example calcHypotenuse(6,8) = 10
 */
const calcHypotenuse = (base, adjacent) => {
  const hypotenuse = Math.sqrt(base ** 2 + adjacent ** 2)
  return hypotenuse
}

/**
 * @function calcOtherSides
 * @description Calculate the other sides of a triangle.
 * @param {Integer} side1 - Integer
 * @param {Integer} side2 - Integer
 * @return {Integer} - sides
 * @see [calcOtherSides](https://en.wikipedia.org/wiki/Pythagorean_theorem)
 * @example calcOtherSides(6,10) = 8
 */
const calcOtherSides = (side1, side2) => {
  if (side1 > side2) {
    const side = Math.sqrt(side1 ** 2 - side2 ** 2)
    return side
  } else if (side2 > side1) {
    const side = Math.sqrt(side2 ** 2 - side1 ** 2)
    return side
  }

  return 'Both sides cannot be the same value'
}

export {
  calcHypotenuse,
  calcOtherSides
}
