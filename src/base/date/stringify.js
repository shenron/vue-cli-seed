

import monthNames from './monthNames';

export default (pattern, date, translate) => {
  // if no date return en empty value
  if (!date) {
    return '';
  }

  const getDateTime = () => {
    let h = String(date.getHours()),
      m = String(date.getMinutes());

    if (h.length === 1) {
      h = `0${h}`;
    }
    if (m.length === 1) {
      m = `0${m}`;
    }
    return `${date.getDate()} ${monthNames(date.getMonth()).substr(0, 3)} ${date.getFullYear()} ${h}:${m}`;
  };

  // if not a valid Date return the paramter
  if (Number.isNaN(new Date(date).getTime())) {
    return date;
  }

  if (!translate) {
    switch (pattern) {
      case 'MM-YYYY':
        return `${date.getMonth() + 1}-${date.getFullYear()}`;
      default:
        return date.toString();
    }
  } else {
    switch (pattern) {
      case 'MM-YYYY':
        return `${monthNames(date.getMonth()).substr(0, 3)} ${date.getFullYear()}`;
      case 'DD-MM-YYYY':
        return `${date.getDate()} ${monthNames(date.getMonth()).substr(0, 3)} ${date.getFullYear()}`;
      case 'DD-MM-YYYY H:M':
        return getDateTime(date);
      case 'DD-MM-YYYY H:M:s':
        return `${getDateTime(date)}:${date.getSeconds()}`;
      case 'YYYY-MM-DD':
        return `${date.getFullYear()} ${monthNames(date.getMonth()).substr(0, 3)} ${date.getDate()}`;
      default:
        return date.toString();
    }
  }
};
