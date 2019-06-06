import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import ProductSummary from "./ProductSummary";

describe("ProductSummary", () => {
  it("displays the price", () => {
    const product = { price: { now: "10" } };
    const price = "10";
    const summary = shallow(
      <ProductSummary product={product} key={0} index={0} />
    );
    const displayedPrice = summary.find("#dishwasherSummary0");

    expect(summary).toMatchSnapshot();
    expect(displayedPrice.text()).toEqual(`£${price}`);
  });
});
