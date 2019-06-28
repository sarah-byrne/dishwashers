import ProductGrid from "../src/components/ProductGrid/ProductGrid";
import React from "react";
import { Component } from "react";
import fetch from "isomorphic-fetch";

class Dishwashers extends Component {
  constructor(props) {
    super(props);
  }

  static async getInitialProps() {
    const url =
      "https://api.johnlewis.com/v1/products/search?q=dishwasher&key=Wu1Xqn3vNrd1p7hqkvB6hEu0G9OrsYGb&pageSize=20";
    const res = await fetch(url);
    const data = await res.json();
    return { data };
  }

  render() {
    return (
      <div>
        <h1 id="dishWasherGrid">Dishwashers</h1>{" "}
        <ProductGrid products={this.props.data.products} />
      </div>
    );
  }
}

export default Dishwashers;
