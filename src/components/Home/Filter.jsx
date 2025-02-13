function Filter() {
  return (
    <div className="filter">
      <div id="categoryes" className="filter__categoryes anchor">
        <div className="filter__categoryes-flex">
          <div
            onClick="changeActiveCategorySort(this)"
            className="filter__categoryes-item active-category">
            <p>Popular</p>
            <span></span>
          </div>
          <div onClick="changeActiveCategorySort(this)" className="filter__categoryes-item">
            <p>Novelty</p>
            <span></span>
          </div>
          <div onClick="changeActiveCategorySort(this)" className="filter__categoryes-item">
            <p>Featured</p>
            <span></span>
          </div>
          <div onClick="changeActiveCategorySort(this)" className="filter__categoryes-item">
            <p>Short films</p>
            <span></span>
          </div>
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
