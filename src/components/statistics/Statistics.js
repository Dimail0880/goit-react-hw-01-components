import React from 'react';
import StatisticItem from './StatisticItem';
import PropTypes from "prop-types";



const Statistic = ({title, stats}) => {
    return(
        <section className="statistics">
          {title && <h2 className="title">Upload stats</h2> }
  

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
Statistic.defaultProps = {
  stats: {},
  title: '',
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};
export  default Statistic