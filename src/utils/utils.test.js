import dataFormatter from './dataFormatter';
import isValidDate from './dataValidator';
import * as DataTypes from '../constants/dataTypes';

describe('Data Formatter Testing', () => {
  it('Should be able to handle an empty call', () => {
    expect(dataFormatter()).toEqual('');
  });

  it('Should be able to handle a bad type', () => {
    expect(dataFormatter('foo', 'bar')).toEqual('bar');
  });

  it(`Should be able to handle a date for ${DataTypes.WEEK_ENDING}`, () => {
    expect(dataFormatter(DataTypes.WEEK_ENDING, '2019-01-02')).toEqual('01-02-19');
  });

  it(`Should be able to handle a currency for ${DataTypes.RETAIL_SALES}`, () => {
    expect(dataFormatter(DataTypes.RETAIL_SALES, '123456')).toEqual('$123456');
  });
});

describe('Date Validator Testing', () => {
  it('Should return an empty call as not a date', () => {
    expect(isValidDate()).toEqual(false);
  });

  const goodDates = [
    '1912-02-15', '1914-01-24', '1916-10-21', '1922-12-30', '1926-10-02', '1982-01-08', '1987-01-16', '2010-11-22', '2040-01-07', '2046-02-10', '2059-11-10',
    '2072-04-10', '2078-10-04', '2081-01-10', '2099-04-15'
  ];

  const badDates = [
    '1912-01-32', '1914-01-00', '1916-00-21', '1922-02-29', '1926-03-32', '1982-04-31', '1987-05-32', '2010-06-31', '2040-07-32', '2046-08-32', '2059-09-31',
    '2072-10-32', '2078-11-31', '2081-12-32', '1199-02-17', '2199-04-15', 'asdf', 777, [], {}
  ];

  goodDates.forEach(date => {
    it(`Should return as a valid date for ${date}`, () => {
      expect(isValidDate(date)).toEqual(true);
    });
  });

  badDates.forEach(date => {
    it(`Should return as an invalid date for ${date}`, () => {
      expect(isValidDate(date)).toEqual(false);
    });
  });

});