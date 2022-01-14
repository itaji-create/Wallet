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
      role,
      exchange,
    } = this.props;
    return (
      <table>
        <tr>
          <columnheader className="column" role={ role }>
            { Description }
          </columnheader>
          <columnheader className="column" role={ role }>{ Tag }</columnheader>
          <columnheader className="column" role={ role }>{ Method }</columnheader>
          <columnheader className="column" role={ role }>{ Value }</columnheader>
          <columnheader className="column" role={ role }>{ Currency }</columnheader>
          <columnheader className="column" role={ role }>{ exchange }</columnheader>
          <columnheader className="column" role={ role }>
            { ConvertedValue }
          </columnheader>
          <columnheader className="column" role={ role }>
            { ConversionCurrency }
          </columnheader>
          <columnheader className="column" role={ role }>{ Change }</columnheader>
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
  role: PropTypes.string.isRequired,
  exchange: PropTypes.string.isRequired,
};

export default ExpenseTable;
