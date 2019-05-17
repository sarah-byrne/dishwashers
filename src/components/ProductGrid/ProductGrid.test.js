import ProductGrid from "./ProductGrid";
import { shallow } from "enzyme";

describe("ProductGrid", () => {
  it("displays Dishwashers Header", () => {
    const grid = shallow(<ProductGrid />);
    const header = grid.find("h1");

    expect(header.text()).toBe("Dishwashers");
  });
});
