'use strict';

export default (id) => {
  var months = [
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
    'December'
  ];

  if (Number.isInteger(id)) {
    return months[id];
  } else {
    return months;
  }
};