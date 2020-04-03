import React from 'react';

const StatisticItem = ({label, percentage}) => {
    return (
        
             <li className="item">
      <span className="label">{label}</span>
    <span className="percentage">{percentage}</span>
    </li>
        
    );
};


export default StatisticItem;