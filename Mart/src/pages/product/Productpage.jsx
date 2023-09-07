import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/ProductSlice";
import Mycard from "../../components/productslider/card/Mycard";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";

export default function Productpage() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products.products);

  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    subcategory: [],
    brand: [],
  });

  const [sortOption, setSortOption] = useState(""); // State for sorting
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedVal, setSelectedVal] = useState("All Products"); // State for filtered products

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
    setSelectedVal(optionValue);
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
    <Stack display={"flex"} flexDirection={"row"} padding={4}>
      {/* Filter Sidebar */}
      <Stack
        sx={{
          flex: 2,
          position: "sticky",
          top: "19%",

          height: "100%",
        }}
      >
        <form>
          <h2 className="text-gray-800 font-bolder mb-2 text-lg">Categories</h2>
          {[...new Set(data.map((product) => product.category))].map(
            (category) => (
              <div>
                <label
                  key={category}
                  className="flex gap-1 items-center mb-2.5"
                >
                  <input
                    type="checkbox"
                    value={category}
                    checked={selectedFilters.category.includes(category)}
                    onChange={() => handleFilterChange("category", category)}
                  />
                  {category}
                </label>
              </div>
            )
          )}
          <hr />
          <h3 className="text-gray-800 font-bolder mb-2 mt-2 text-lg">
            Subcategories
          </h3>

          {[...new Set(data.map((product) => product.subcategory))].map(
            (subcategory) => (
              <div>
                <label
                  key={subcategory}
                  className="flex gap-1 items-center mb-2.5"
                >
                  <input
                    type="checkbox"
                    value={subcategory}
                    checked={selectedFilters.subcategory.includes(subcategory)}
                    onChange={() =>
                      handleFilterChange("subcategory", subcategory)
                    }
                  />
                  {subcategory}
                </label>
              </div>
            )
          )}
          <hr />
          <h3 className="text-gray-800 font-bolder mb-2 mt-2 text-lg">
            Brands
          </h3>
          {[...new Set(data.map((product) => product.brand))].map((brand) => (
            <div>
              <label key={brand} className="flex mb-2.5 gap-1 items-center">
                <input
                  type="checkbox"
                  value={brand}
                  checked={selectedFilters.brand.includes(brand)}
                  onChange={() => handleFilterChange("brand", brand)}
                />
                {brand}
              </label>
            </div>
          ))}
        </form>
      </Stack>

      <Stack flex={8}>
        <Stack
          display={"flex"}
          alignItems={"center"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <div>
            <p className="text-gray-800 text-md font-bold pb-2">
              {selectedVal}
            </p>
            <p className="text-gray-500 text-sm">
              Showing {filteredResults.length} out of {data.length} results
            </p>
          </div>

          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Sort By</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={sortOption}
              label={"Sort By"}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="lowToHigh">Price: Low to High</MenuItem>
              <MenuItem value="highToLow">Price: High to Low</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <Stack
          flexDirection={"row"}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          {filteredResults.map((ele, i) => {
            return <Mycard data={ele} key={i} />;
          })}
        </Stack>
      </Stack>
    </Stack>
  );
}
