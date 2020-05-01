const band_pass_filter = require("./band_pass_filter")

describe('band_pass_filter', () => {
  describe('single sound', () => {
    test('single sound within range gets returned', () => {
      expect(band_pass_filter([45], 30, 50)).toEqual([45]);
    })

    test('single sound within range gets returned', () => {
      expect(band_pass_filter([5], 0, 10)).toEqual([5]);
    })

    test('single sound within range gets returned', () => {
      expect(band_pass_filter([5], 0, 10)).toEqual([5]);
    })

    // test('single sound below range gets set at min', () => {
    //   expect(band_pass_filter([25], 40, 45)).toEqual([40]);
    // })
  })
})