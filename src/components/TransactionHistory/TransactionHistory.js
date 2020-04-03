import React from 'react';
import TransactionItem from './TransactionItem';


const TransactionHistory = ({items}) => {
    return (
        <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {
        items.map(el => (
            <TransactionItem
            key={el.id}
            amount={el.amount}
            currency={el.currency}
            type={el.type} />
        )) 
    }


  </tbody>
</table>
    );
};

export default TransactionHistory;