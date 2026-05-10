const convertToCelsius = function(f) {
  let celsius = (f - 32) * (5 / 9);
  // Arredondar para 1 casa decimal
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(c) {
  let fahrenheit = (c * (9 / 5) + 32);
  // Arredondar para 1 casa decimal
  return Math.round(fahrenheit * 10) / 10;
};

// No final do ficheiro, o export será assim (como o README mencionou):
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
