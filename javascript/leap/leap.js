//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// A leap year is one that is a year evenly divisible by 4
// If a year is evenly divisible by 4 and evenly divisible by 100  - it is not a leap year
// If a year is divisible by 4 and 400 is is a leap year

var Year = function() {};

Year.prototype.isLeap = function(year) {
  if (year % 4 !== 0) {
    return false;
  } else if (year % 4 === 0 && year % 400 === 0)   {
    return true;
  } else if (year % 4 === 0 && year % 100 === 0)  {
    return false;
  }
  return true;
};

module.exports = Year;
