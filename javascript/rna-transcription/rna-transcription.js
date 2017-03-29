var dnaTranscriber = function() {};

const DNA = ['G', 'C', 'T', 'A'];
const RNA = ['C', 'G', 'A', 'U'];

dnaTranscriber.prototype.toRna = function(dnaString) {
  let rnaString = '';
  const arr = dnaString.split("");

  for (var i = 0; i < arr.length; i++) {
    if (DNA.indexOf(arr[i]) === -1) {
      throw new Error('Invalid input');
    } else {
      rnaString += RNA[DNA.indexOf(arr[i])];
    }
  }
  return rnaString;
};

module.exports = dnaTranscriber;
