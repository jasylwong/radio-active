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
    describe('two sounds within range' , () => {
      test('two sounds within range', () => {
        expect(band_pass_filter([41, 42], 40, 45)).toEqual([41, 42]);
      })
    })

    describe('two sounds: one within range, one above' , () => {
      test('two sounds within range', () => {
        expect(band_pass_filter([41, 60], 40, 45)).toEqual([41, 45]);
      })
    })

    describe('two sounds: both outside range' , () => {
      test('two sounds within range', () => {
        expect(band_pass_filter([5, 46], 40, 45)).toEqual([40, 45]);
      })
    })
  })
})