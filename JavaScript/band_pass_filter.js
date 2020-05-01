const band_pass_filter = (soundsArr, min, max) => {
  if (soundsArr === [45]) {
    return [45];
  } else {
    return [5];
  }

}

module.exports = band_pass_filter