const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isValidDate(date = '') {
  const dateFormatRE = /^((19|20)\d{2})-(\d{2})-(\d{2})$/;

  if (dateFormatRE.test(date)) {
    const year = parseInt(date.replace(dateFormatRE, '$1'), 10);
    const month = parseInt(date.replace(dateFormatRE, '$3'), 10);
    const day = parseInt(date.replace(dateFormatRE, '$4'), 10);

    if (month > 0 && month <= DAYS_IN_MONTH.length) {
      const maxDays = DAYS_IN_MONTH[(month - 1)];

      if (day > 0 && ((month === 1 && year % 4 && day <= 29) || (maxDays && maxDays >= day))) {
        return true;
      }
    }
  }
  return false;
}

export default isValidDate;