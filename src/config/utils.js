Date.prototype.monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// updating Date objects prototype ,by adding new methods inorder to get month name rather than number.
Date.prototype.getMonthName = function () {
  return this.monthNames[this.getMonth()];
};
Date.prototype.getShortMonthName = function () {
  return this.getMonthName().substr(0, 3);
};

// usage:
var d = new Date();
console(d.getMonthName()); // "October"
console(d.getShortMonthName()); //Oct
