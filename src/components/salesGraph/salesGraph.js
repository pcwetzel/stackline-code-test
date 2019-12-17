import React from 'react';
import PropTypes from 'prop-types';
import { LineChart } from 'react-chartkick';
import 'chart.js';
import {dataDetails, RETAIL_SALES, WEEK_ENDING, WHOLESALE_SALES} from '../../constants/dataTypes';
import './sales-graph.scss';

SalesGraph.propTypes = {
  sales: PropTypes.array
};

function reduceData(sales, columnName) {
  return sales.reduce((obj, item) => {
    return { ...obj, [item[WEEK_ENDING]]: item[columnName] };
  }, {});
}

function SalesGraph(props) {
  const sales = props.sales || [];
  const retailSalesData = reduceData(sales, RETAIL_SALES);
  const wholesaleSalesData = reduceData(sales, WHOLESALE_SALES);

  const data = [
    {"name": dataDetails[RETAIL_SALES].title, "data": retailSalesData},
    {"name": dataDetails[WHOLESALE_SALES].title, "data": wholesaleSalesData}
  ];
  return (
    <section className='region sales-graph'>
      <h2>Retail Sales</h2>
      <LineChart id='sales-graph'
                 height='650px'
                 data={data}
                 colors={['#46A8F6', '#9BA6BF']}
                 legend={false}
                 prefix='$'
                 thousands=','
                 dataset={{borderWidth: 3}}
                 points={false}
      />
    </section>
  );
}

export default SalesGraph;
