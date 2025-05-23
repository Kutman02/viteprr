import React from 'react';
import { useSelector } from 'react-redux';

function FilterButtons() {
  const { filmsCategory } = useSelector((store) => store.movies);

  const [active, changeActive] = React.useState('All');

  return (
    <div className="filter__buttons">
      <button onClick={() => changeActive('All')} className={active === 'All' ? 'active' : ''}>
        All
      </button>

      {filmsCategory.map((value, index) => (
        <button
          key={index}
          onClick={() => changeActive(value)}
          className={value === active ? 'active' : ''}>
          {value}
        </button>
      ))}
    </div>
  );
}
export default FilterButtons;
