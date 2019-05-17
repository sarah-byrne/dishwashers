import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import ProductSummary from "./ProductSummary";

describe("ProductSummary", () => {
  it("displays the price", () => {
    const price = "10";
    const summary = shallow(<ProductSummary price={price} />);
    const displayedPrice = summary.find("#price");

    expect(displayedPrice.text()).toEqual(`£${price}`);
  });
});
