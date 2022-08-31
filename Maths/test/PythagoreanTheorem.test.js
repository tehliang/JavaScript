import * as py from '../PythagoreanTheorem'

describe('Testing calcHypotenuse calculations', () => {
  it('with natural number', () => {
    const result = py.calcHypotenuse(6, 8)
    expect(result).toBe(10)
  })
})

describe('Testing calcOtherSides calculations', () => {
  it('with side1 bigger than side2', () => {
    const result = py.calcOtherSides(6, 10)
    expect(result).toBe(8)
  })
  it('with side2 bigger than side1', () => {
    const result = py.calcOtherSides(10, 6)
    expect(result).toBe(8)
  })
  it('with side1 equals side2', () => {
    const result = py.calcOtherSides(10, 10)
    expect(result).toBe('Both sides cannot be the same value')
  })
})
