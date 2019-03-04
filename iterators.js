/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const logger = function(array) {
  // Your code here
  array.forEach(log => console.log(log));
};

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
const toCelsius = function(temperatures) {
  // Your code here
  return temperatures.map(temp => (temp - 32) * (5 / 9));
};

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
const hottestDays = function(temperatures, threshhold) {
  // Your code here
  return temperatures.filter(temperature => temperature > threshhold);
};

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
const logHottestDays = function(temperatures, threshhold) {
  // Your code here
  logger(toCelsius(hottestDays(temperatures, threshhold)));

  // let temperaturesFilter = temperatures.filter(
  //   temperature => temperature > threshhold
  // );
  // let temperaturesToCelsius = temperaturesFilter.map(
  //   temp => (temp - 32) * (5 / 9)
  // );
  // temperaturesToCelsius.forEach(temp => console.log(temp));
};

// export { logger, toCelsius, hottestDays, logHottestDays };

let array = [213, 54, 109, 343];
logHottestDays(array, 100);
