const WEEK_ENDING = 'weekEnding';
const RETAIL_SALES = 'retailSales';
const WHOLESALE_SALES = 'wholesaleSales';
const UNITS_SOLD = 'unitsSold';
const RETAILER_MARGIN = 'retailerMargin';

const dataDetails = {
  [WEEK_ENDING]: {
    title: 'Week Ending',
    format: 'date'
  },
  [RETAIL_SALES]: {
    title: 'Retail Sales',
    format: 'currency'
  },
  [WHOLESALE_SALES]: {
    title: 'Wholesale Sales',
    format: 'currency'
  },
  [UNITS_SOLD]: {
    title: 'Units Sold',
    format: 'number'
  },
  [RETAILER_MARGIN]: {
    title: 'Retailer Margin',
    format: 'currency'
  }
};

export {
  WEEK_ENDING,
  RETAIL_SALES,
  WHOLESALE_SALES,
  UNITS_SOLD,
  RETAILER_MARGIN,
  dataDetails
};