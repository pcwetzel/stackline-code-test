import React from 'react';
import ProductDetails from '../productDetails';
import SalesGraph from '../salesGraph';
import DataTable from '../dataTable';
import { connect } from 'react-redux';
import './product-view.scss';
import PropTypes from 'prop-types';

const mapStateToProps = state => {
  const product = state.products.slice(0, 1)?.[0];
  const sales = product?.sales;

  return {
    product,
    sales
  };
};

const ProductViewContainer = ({ product, sales }) => {
  const tableData = {
    headings: sales?.[0] && (typeof sales?.[0] === 'object') ? Object.keys(sales[0]) : [],
    rows: sales
  };

  return (
    <>
      <ProductDetails { ...product } />
      <div className='graph'><SalesGraph sales={ sales } /></div>
      <div className='table-view'>
        <section className='region'><DataTable { ...tableData } /></section>
      </div>
    </>
  );
};

ProductViewContainer.propTypes = {
  product: PropTypes.object,
  sales: PropTypes.array
};

const ProductView = connect(mapStateToProps)(ProductViewContainer);

export default ProductView;