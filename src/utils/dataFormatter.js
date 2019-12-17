import { dataDetails } from '../constants/dataTypes';

const dateRE = /^\d{2}(\d{2})-(\d{1,2})-(\d{1,2})$/;

function formatDate(date) {
  if (dateRE.test(date)) {
    const year = date.replace(dateRE, '$1');
    const month = date.replace(dateRE, '$2');
    const day = date.replace(dateRE, '$3');
    return `${month.length === 1 ? '0' : ''}${month}-${day.length === 1 ? '0' : ''}${day}-${year}`;
  }
  return date;
}

export default (type = null, data = '') => {
  if (!Object.prototype.hasOwnProperty.call(dataDetails, type)) {
    return data;
  }

  switch (dataDetails[type].format) {
    case 'date':
      return formatDate(data);
    case 'currency':
      return `$${data.toLocaleString()}`;
    case 'number':
      return data.toLocaleString();
    default:
      return data;
  }
};