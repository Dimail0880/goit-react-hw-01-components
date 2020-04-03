import React from 'react';
import StatisticItem from './StatisticItem';



const Statistic = ({stats}) => {
    return(
        <section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
      <>
  {stats.map(el => (
          <StatisticItem
            key={el.id}
            label={el.label}
            percentage={el.percentage}
          /> ))} </>
  </ul>
</section>

    )
}

export  default Statistic