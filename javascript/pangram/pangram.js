//array of the alphabet
//take string input and split to array
//iterate over the array and check that character is in the alphabet
//remove it from the alphabet array
//if the alphaabet array is empty then all letters have been found in the sentence - true
//otherwise false

var Pangram = function(string) {
  this.string = string;
  this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
};

Pangram.prototype.isPangram = function() {

  const arr = this.string.split('');

  for (var i = 0; i < arr.length; i++) {
    let index = this.alphabet.indexOf(arr[i].toLowerCase())
    if (index !== -1) {
      this.alphabet.splice(index, 1);
    }
  }

  if (this.alphabet.length === 0){
    return true;
  } else {
    return false;
  }
};

module.exports = Pangram;
