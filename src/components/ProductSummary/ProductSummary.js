import React from "react";

const ProductSummary = props => (
  <div id={`dishwasherSummary${props.index}`}>
    <img id={`image${props.index}`} src={props.product.image} />
    <div id={`title${props.index}`}>{props.product.title}</div>
    <div id={`price${props.index}`}>£{props.product.price.now}</div>
  </div>
);

export default ProductSummary;
