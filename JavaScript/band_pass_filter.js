const band_pass_filter = (soundsArr, min, max) => {
  if (soundsArr[0] >= min && soundsArr[0] <= max) {
    return soundsArr;
  } else if (soundsArr[0] < min) {
    return [min];
  }
}

module.exports = band_pass_filter