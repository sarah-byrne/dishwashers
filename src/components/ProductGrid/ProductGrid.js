import React from "react";
import { Component } from "react";
import ProductSummary from "../ProductSummary/ProductSummary";
import styles from "./ProductGrid.scss";

class ProductGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products
    };
  }

  render() {
    return (
      <ul className={styles.grid1}>
        {this.state.products.map((product, index) => {
          return (
            <li key={index}>
              <ProductSummary index={index} product={product} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ProductGrid;
