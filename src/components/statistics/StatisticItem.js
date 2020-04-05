import React from "react";
import styles from "./statistics.module.css";
import PropTypes from "prop-types";
import  getRandomColor  from "../../helpers/GetRandomColor"





const StatisticItem = ({ label, percentage }) => {
  return (
    <li className={styles.item} style={{ backgroundColor: getRandomColor() }}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}

export default StatisticItem;
