import React from "react";
import styles from "./statistics.module.css";

function getRandomColor() {
  const color = () => {
    return Math.floor(Math.random() * 256);
  };
  return `rgb(${color()},${color()},${color()})`;
}

const StatisticItem = ({ label, percentage }) => {
  return (
    <li className={styles.item} style={{ backgroundColor: getRandomColor() }}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatisticItem;
