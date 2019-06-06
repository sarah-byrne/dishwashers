import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import ProductSummary from "./ProductSummary";

describe("ProductSummary", () => {
  const product = {
    price: { now: "10" },
    image: "//johnlewis.scene7.com/is/image/JohnLewis/233326789?"
  };
  const summary = shallow(
    <ProductSummary product={product} key={0} index={0} />
  );

  it("displays the product summary", () => {
    expect(summary).toMatchSnapshot();
  });

  it("displays the price", () => {
    const price = "10";
    const prodPrice = summary.find("#price0");

    expect(prodPrice.text()).toEqual(`£${price}`);
  });

  it("displays the image", () => {
    const picture = summary.find("#image0");

    expect(picture.prop("src")).toEqual(
      "//johnlewis.scene7.com/is/image/JohnLewis/233326789?"
    );
  });
});
