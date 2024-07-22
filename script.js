// -Default Parameters- //
// Default parameters let a function have a certain value if no parameters are given. For example:
function writeHackClubHQAddress(line1 = "Falls Rd" , line2 = "Shelburne" , line3 = "Vermont")
console.log("Hack Club HQ is at " + line1 + ", " + line2 + ", " + line3 + ".")

// -Return Keyword- //
// The return keyword is used to return a value from a function at the location where it's called. For example:
let currentyear = 2024
let birthyear = 2018


function findDrakeAndHisWifesAge(currentyear - birthyear) {
  return currentyear - birthyear;
}

// -Helper Functions- //
// Helper functions are functions that are used inside other functions to help them do their job. For example:

// I was too lazy to come up with a Hack Club related piece of code, so I made a Celcius to Fahrenheit calculator.
function multiplyByNineFifths(number) {
  return number * (9/5);
};

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};