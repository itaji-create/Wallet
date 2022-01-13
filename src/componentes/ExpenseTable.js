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
          <columnheader className="column" role="columnheader">
            { Description }
          </columnheader>
          <columnheader className="column" role="columnheader">{ Tag }</columnheader>
          <columnheader className="column" role="columnheader">{ Method }</columnheader>
          <columnheader className="column" role="columnheader">{ Value }</columnheader>
          <columnheader className="column" role="columnheader">{ Currency }</columnheader>
          <columnheader className="column" role="columnheader">
            { ConvertedValue }
          </columnheader>
          <columnheader className="column" role="columnheader">
            { ConversionCurrency }
          </columnheader>
          <columnheader className="column" role="columnheader">{ Change }</columnheader>
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
