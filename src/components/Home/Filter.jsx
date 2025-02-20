import {useState} from "react";
function Filter() {
  const [status, changeStatus] = useState('Popular');

  let filter_categoryes = ['Popular', 'Novelty', 'Featured', 'Short films'];

  return (
    <div className="filter">
      <div id="categoryes" className="filter__categoryes anchor">
        <div className="filter__categoryes-flex">
          {filter_categoryes.map((categorye, index) => (
            <div
              onClick={() => changeStatus(categorye)}
              className={`filter__categoryes-item ${categorye === status ? 'active-category' : ''}`}
              key={index}>
              <p>{categorye}</p>
              <span></span>
            </div>
          ))}
        </div>
        <span></span>
      </div>
      <div className="filter__buttons">
        <button>Movies</button>
        <button>Cinema</button>
        <button>Adventure</button>
        <button>Comedy</button>
        <button>Fantasy</button>
        <button>History</button>
        <button>Cartoon</button>
        <button>Detective</button>
        <button>Mysticism</button>
        <button>Drama</button>
      </div>
      <div className="filter__search">
        <input type="text" placeholder="Search..." />
        <button>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}
export default Filter;
