import { Transaction } from "../Transaction/Transaction";
import css from 'components/task4/TransactionHistory/TransactionHistory.module.css'
import PropTypes from 'prop-types';

export const TransactionHistory = ({transactions}) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
    {transactions.map(transaction => {
        return (
            <tr key={transaction.id} className={css.row}>
                <Transaction transaction={transaction}/>
            </tr>
        )
    })}
        
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  }))
}