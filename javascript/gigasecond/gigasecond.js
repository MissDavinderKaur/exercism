var Gigasecond = function(originalDate) {
  this.originalDate = originalDate;
};

Gigasecond.prototype.date = function() {
  return new Date(this.originalDate.getTime() + Math.pow(10,12));
};

module.exports = Gigasecond;
