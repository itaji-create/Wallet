import React from 'react';
import { PropTypes } from 'prop-types';

class ExpenseTable extends React.Component {
  render() {
    const {
      Description,
      Tag,
      Method,
      Value,
      Currency,
      ConvertedValue,
      ConversionCurrency,
      Change,
    } = this.props;
    return (
      <table>
        <tr>
          <columnheader role="columnheader">{ Description }</columnheader>
          <columnheader role="columnheader">{ Tag }</columnheader>
          <columnheader role="columnheader">{ Method }</columnheader>
          <columnheader role="columnheader">{ Value }</columnheader>
          <columnheader role="columnheader">{ Currency }</columnheader>
          <columnheader role="columnheader">{ ConvertedValue }</columnheader>
          <columnheader role="columnheader">{ ConversionCurrency }</columnheader>
          <columnheader role="columnheader">{ Change }</columnheader>
        </tr>
      </table>
    );
  }
}

ExpenseTable.propTypes = {
  Description: PropTypes.string.isRequired,
  Tag: PropTypes.string.isRequired,
  Method: PropTypes.string.isRequired,
  Value: PropTypes.string.isRequired,
  Currency: PropTypes.string.isRequired,
  ConvertedValue: PropTypes.string.isRequired,
  ConversionCurrency: PropTypes.string.isRequired,
  Change: PropTypes.string.isRequired,
};

export default ExpenseTable;
