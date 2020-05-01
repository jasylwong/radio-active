const band_pass_filter = (soundsArr, min, max) => {
  
  let output = [];

  soundsArr.forEach((sound) => {
    if (sound >= min && sound <= max) {
      output.push(sound);
    } else if (sound < min) {
      output.push(min);
    } else {
      output.push(max);
    }
  })
  return output;
}

module.exports = band_pass_filter