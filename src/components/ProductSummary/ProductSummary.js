import React from "react";

const ProductSummary = props => (
  <div id={`dishwasherSummary${props.index}`}>
    <img id={`image${props.index}`} src={props.product.image} />£
    {props.product.price.now}
  </div>
);

export default ProductSummary;
