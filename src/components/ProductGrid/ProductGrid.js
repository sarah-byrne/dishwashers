import React from "react";
import { Component } from "react";
import ProductSummary from "../ProductSummary/ProductSummary";

class ProductGrid extends Component {
  constructor(props) {
    super(props);
    this.state.products = props.products;
  }

  render() {
    return (
      <div>
        {this.state.products.map((product, index) => {
          <ProductSummary key={index} />;
        })}
      </div>
    );
  }
}

export default ProductGrid;
