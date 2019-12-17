import React from 'react';
import dataFormatter from '../../utils/dataFormatter';
import { dataDetails } from '../../constants/dataTypes';
import './data-table.scss';
import PropTypes from 'prop-types';

DataTable.propTypes = {
  headings: PropTypes.array,
  rows: PropTypes.array
};

function DataTable(props) {
  const headings = props?.headings || [];
  const rows = props.rows || [];

  return (
    <div className='data-table'>
      <table>
        { headings &&
          <thead>
            <tr>
              { headings.map(heading => {
                return (
                  <th key={heading}>{ dataDetails[heading]?.title ? dataDetails[heading].title : heading }</th>
                );
              }) }
            </tr>
          </thead>
        }
        <tbody>
        {
          rows.map((row, rowIndex) => {
            return (
              <tr key={`row-${rowIndex}`}>
                {
                  headings.map((heading, cellIndex) => {
                    return (
                      <td key={`cell-${heading}-${cellIndex}`}>{ dataFormatter(heading, row[heading]) }</td>
                    );
                  })
                }
              </tr>
            );
          })
        }
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
