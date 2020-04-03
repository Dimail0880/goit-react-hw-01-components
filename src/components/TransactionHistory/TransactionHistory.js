import React from "react";
import TransactionItem from "./TransactionItem";
import styles from "./Transaction.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(el => (
          <TransactionItem
            key={el.id}
            amount={el.amount}
            currency={el.currency}
            type={el.type}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
