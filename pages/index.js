import ProductGrid from "../src/components/ProductGrid/ProductGrid";

function Dishwashers() {
  // Convert to react class when state required - API call
  return (
    <div>
      <h1 id="dishWasherGrid">Dishwashers</h1>{" "}
      {/* Convert to component that takes props of number of products */}
      <ProductGrid />
    </div>
  );
}

export default Dishwashers;
