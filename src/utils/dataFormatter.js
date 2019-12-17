import { dataDetails } from '../constants/dataTypes';

export default (type = null, data = '') => {
  if (!Object.prototype.hasOwnProperty.call(dataDetails, type)) {
    return data;
  }
  switch (dataDetails[type].format) {
    case 'date':
      const tempDate = new Date(`${data}T00:00:00`);
      const date = tempDate.getDate();
      const month = tempDate.getMonth() + 1;
      const year = tempDate.getFullYear().toString().substr(2);
      return `${month < 10 ? '0' : ''}${month}-${date < 10 ? '0' : ''}${date}-${year}`;
    case 'currency':
      return `$${data.toLocaleString()}`;
    default:
      return data;
  }
};