import React from "react";

const ProductSummary = props => (
  <div id={`dishwasherSummary${props.index}`}>£{props.product.price.now}</div>
);

export default ProductSummary;
