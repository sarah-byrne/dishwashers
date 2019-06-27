import React from "react";
import styles from "./ProductSummary.scss";

const ProductSummary = props => (
  <div className={styles.summary} id={`dishwasherSummary${props.index}`}>
    <img id={`image${props.index}`} src={props.product.image} />
    <div id={`title${props.index}`}>{props.product.title}</div>
    <strong id={`price${props.index}`}>£{props.product.price.now}</strong>
  </div>
);

export default ProductSummary;
