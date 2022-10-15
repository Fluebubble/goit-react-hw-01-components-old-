import { Transaction } from "../Transaction/Transaction";
import css from 'components/task4/TransactionHistory/TransactionHistory.module.css'

export const TransactionHistory = ({transactions}) => {
  return (
    <table class={css.transactionHistory}>
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
