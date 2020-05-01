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

    test('single sound above range gets set at max', () => {
      expect(band_pass_filter([200], 40, 45)).toEqual([45]);
    })
  })

  describe('two sounds', () => {
    test('two sounds within range' , () => {
      expect(band_pass_filter([41, 42], 40, 45)).toEqual([41, 42]);
    })

    test('two sounds: one within range, one above' , () => {
      expect(band_pass_filter([41, 60], 40, 45)).toEqual([41, 45]);
    })

    test('two sounds: both outside range' , () => {
      expect(band_pass_filter([5, 46], 40, 45)).toEqual([40, 45]);
    })
  })

  describe('three sounds' , () => {
    test('three sounds', () => {
      expect(band_pass_filter([35, 1, 37], 34, 36)).toEqual([35, 34, 36]);
    })
  })
})