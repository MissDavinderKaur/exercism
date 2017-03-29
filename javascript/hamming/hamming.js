
var Hamming = function() {};

Hamming.prototype.compute = function(string1, string2) {

  if (string1.length == string2.length) {
    const arr1 = string1.split("");
    const arr2 = string2.split("");

    let counter = 0;

    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        counter++;
      }
    }
    return counter;

  } else {
    throw new Error('DNA strands must be of equal length.');
  }

};

module.exports = Hamming;
