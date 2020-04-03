import React from 'react';

function getRandomColor() {
  const color = () => {
    return Math.floor(Math.random() * 256);
  };
  return `rgb(${color()},${color()},${color()})`;
}

const StatisticItem = ({label, percentage}) => {
    return (
        <li className="item"
        style={{ backgroundColor: getRandomColor() }}>
      <span className="label">{label}</span>
    <span className="percentage">{percentage}%</span>
    </li>
        
    );
};



export default StatisticItem;