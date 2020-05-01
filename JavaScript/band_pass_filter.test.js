const band_pass_filter = require("./band_pass_filter")

describe('band_pass_filter', () => {
  describe('single sound', () => {
    test('45 within range gets returned', () => {
      expect(band_pass_filter([45], 30, 50)).toEqual([45]);
    })

    test('5 within range gets returned', () => {
      expect(band_pass_filter([5], 0, 10)).toEqual([5]);
    })

    test('66 within range gets returned', () => {
      expect(band_pass_filter([66], 55, 75)).toEqual([66]);
    })

    test('single sound below range gets set at min', () => {
      expect(band_pass_filter([25], 40, 45)).toEqual([40]);
    })
  })
})