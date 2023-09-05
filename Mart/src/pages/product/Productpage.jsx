import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/ProductSlice";
import Mycard from "../../components/productslider/card/Mycard";
import { Stack } from "@mui/material"; // Keep Stack from MUI for layout

export default function Productpage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products.products);

  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    subcategory: [],
    brand: [],
  });

  const [sortOption, setSortOption] = useState(""); // State for sorting
  const [filteredResults, setFilteredResults] = useState([]); // State for filtered products

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // Function to update selected filters and filter products
  const handleFilterChange = (filterId, optionValue) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterId]: prevFilters[filterId].includes(optionValue)
        ? prevFilters[filterId].filter((value) => value !== optionValue)
        : [...prevFilters[filterId], optionValue],
    }));
  };

  useEffect(() => {
    // Filter products based on selected filters
    const filteredProducts = data.filter((product) => {
      const isCategoryMatch =
        selectedFilters.category.length === 0 ||
        selectedFilters.category.includes(product.category);
      const isSubcategoryMatch =
        selectedFilters.subcategory.length === 0 ||
        selectedFilters.subcategory.includes(product.subcategory);
      const isBrandMatch =
        selectedFilters.brand.length === 0 ||
        selectedFilters.brand.includes(product.brand);

      return isCategoryMatch && isSubcategoryMatch && isBrandMatch;
    });

    // Sort products based on selected sort option
    const sortedProducts = filteredProducts.slice(); // Create a copy for sorting

    if (sortOption === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    // Set the filtered results and update the state
    setFilteredResults(sortedProducts);
  }, [data, selectedFilters, sortOption]);

  return (
    <div className="bg-white">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <Stack display={"flex"} gap={4} flexDirection={"row"}>
            {/* Filter Sidebar */}
            <div
              style={{
                flex: 2,
                position: "sticky",
                top: "19%",
                height: "100%",
              }}
            >
              <form>
                <h3>Categories</h3>
                {[...new Set(data.map((product) => product.category))].map(
                  (category) => (
                    <label key={category}>
                      <input
                        type="checkbox"
                        value={category}
                        checked={selectedFilters.category.includes(category)}
                        onChange={() =>
                          handleFilterChange("category", category)
                        }
                      />
                      {category}
                    </label>
                  )
                )}
                <h3>Subcategories</h3>

                {[...new Set(data.map((product) => product.subcategory))].map(
                  (subcategory) => (
                    <label key={subcategory}>
                      <input
                        type="checkbox"
                        value={subcategory}
                        checked={selectedFilters.subcategory.includes(
                          subcategory
                        )}
                        onChange={() =>
                          handleFilterChange("subcategory", subcategory)
                        }
                      />
                      {subcategory}
                    </label>
                  )
                )}

                <h3>Brands</h3>
                {[...new Set(data.map((product) => product.brand))].map(
                  (brand) => (
                    <label key={brand}>
                      <input
                        type="checkbox"
                        value={brand}
                        checked={selectedFilters.brand.includes(brand)}
                        onChange={() => handleFilterChange("brand", brand)}
                      />
                      {brand}
                    </label>
                  )
                )}

                <p>
                  Showing {filteredResults.length} out of {data.length} results
                </p>
              </form>
            </div>

            {/* Sorting Dropdown */}
            <div style={{ flex: 2 }}>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="">Sort by</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
            </div>

            {/* Product Display */}
            <Stack
              flex={8}
              flexDirection={"row"}
              justifyContent={"center"}
              flexWrap={"wrap"}
            >
              {filteredResults.map((ele, i) => {
                return <Mycard data={ele} key={i} />;
              })}
            </Stack>
          </Stack>
        </section>
      </main>
    </div>
  );
}
