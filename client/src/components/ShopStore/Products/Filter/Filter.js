import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../../../../store/actions/productActions";
class Filter extends Component {
  render() {   
    return (
      <div className="row">
        <div className="col-md-4">{`${this.props.filter.length} products found.`}</div>
        <div className="col-md-4">
          <label>
            Order by
            <select
              className="form-control"
              //value={this.props.sort}
              onChange={(event) => {
                this.props.sortProducts(
                  this.props.filter,
                  event.target.value
                );
              }}
            >
              <option value="">Select</option>
              <option value="lowestprice">Lowest to highest</option>
              <option value="highestprice">Highest to lowest</option>
            </select>
          </label>
        </div>
        <div className="col-md-4">
          <label>
            {" "}
            Filter by brand
            <select
              className="form-control"
              value={this.props.brand}
              onChange={(event) => {
                this.props.filterProducts(
                  this.props.products,
                  event.target.value
                );
              }}
            >
              <option value="">ALL</option>
              <option value="acer">acer</option>
			  <option value="best">best</option>
              <option value="hp">hp</option>
              <option value="apple">apple</option>
              <option value="oppo">oppo</option>
              <option value="sony">sony</option>
              <option value="huawei">huawei</option>
              <option value="nokia">nokia</option>
              <option value="meizu">meizu</option>
              <option value="brother">brother</option>
              <option value="samsung">samsung</option>
              <option value="xiaomi">xiaomi</option>
              <option value="vestel">vestel</option>
              <option value="asus">asus</option>
              <option value="lg">lg</option>
              <option value="lenovo">lenovo</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  brand: state.products.brand,
  sort: state.products.sort,
});
export default connect(mapStateToProps, { filterProducts, sortProducts })(
  Filter
);