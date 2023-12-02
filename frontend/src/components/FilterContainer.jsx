import "../style/FilterContainer.css";

const FilterContainer = () => {
  return (
    <div className="filter">
      <div className="filter-menu-05">
        <div className="collections">Collections</div>
        <div className="pseudo">
          <div className="arrow-downsvg">
            <img className="vector-icon1" alt="" src="/vector.svg" />
          </div>
        </div>
        <div className="item-link">All products</div>
        <div className="item-link1">Tickets</div>
        <div className="item-link2">Clothing</div>
      </div>
      <div className="filters-menu06">
        <div className="heading-4">Tags</div>
        <div className="list">
          <div className="item">
            <div className="link-fashion">Fashion</div>
          </div>
          <div className="item1">
            <div className="link-fashion">Hats</div>
          </div>
          <div className="item2">
            <div className="link-fashion">Sandal</div>
          </div>
          <div className="item3">
            <div className="link-fashion">Belt</div>
          </div>
          <div className="item4">
            <div className="link-fashion">Bags</div>
          </div>
          <div className="item5">
            <div className="link-fashion">Snacker</div>
          </div>
          <div className="item6">
            <div className="link-fashion">Denim</div>
          </div>
          <div className="item7">
            <div className="link-fashion">Minimog</div>
          </div>
          <div className="item8">
            <div className="link-fashion">Vagabond</div>
          </div>
          <div className="item9">
            <div className="link-fashion">Sunglasses</div>
          </div>
          <div className="item10">
            <div className="link-fashion">Beachwear</div>
          </div>
        </div>
      </div>
      <div className="heading-3">Filters</div>
      <div className="filters-menu03">
        <div className="heading-41">Prices</div>
        <div className="item-link3">$0-$25</div>
        <div className="item-link4">$25-$50</div>
        <div className="item-link5">$50+</div>
      </div>
    </div>
  );
};

export default FilterContainer;
