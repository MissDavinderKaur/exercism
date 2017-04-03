var Bob = function() {};

Bob.prototype.hey = function(string) {
  if (string === ''){
    return 'Fine. Be that way!';
  } else if (this.checkAllUpperCase(string)) {
    return 'Whoa, chill out!';
  } else if (string[string.length - 1] === '?') {
    return 'Sure.';
  } else {
    return 'Whatever.';
  }
};

Bob.prototype.checkAllUpperCase = function(string) {
  const arr = string.split('');

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i].toUpperCase()) {
      return false;
    }
  }
  return true;
};


module.exports = Bob;
