import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import {
  fILTERProductApibycategory,
  fILTERProductApibrand,
  fILTERProductApisubcategory,
} from "../../features/ProductSlice";
import Mycard from "../../components/productslider/card/Mycard";
import {
  Stack,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

export default function Productpage() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const data = useSelector((state) => state.products.products);
  const Filterdata = useSelector((state) => state.products.filterData);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [sortByPrice, setSortByPrice] = useState(""); // State for sorting by price

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, []);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((prevCategory) => prevCategory !== category)
      );
    } else {
      setSelectedCategories((prevCategories) => [...prevCategories, category]);
    }
  };

  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands((prevBrands) =>
        prevBrands.filter((prevBrand) => prevBrand !== brand)
      );
    } else {
      setSelectedBrands((prevBrands) => [...prevBrands, brand]);
    }
  };

  const handleSubcategoryChange = (subcategory) => {
    if (selectedSubcategories.includes(subcategory)) {
      setSelectedSubcategories((prevSubcategories) =>
        prevSubcategories.filter(
          (prevSubcategory) => prevSubcategory !== subcategory
        )
      );
    } else {
      setSelectedSubcategories((prevSubcategories) => [
        ...prevSubcategories,
        subcategory,
      ]);
    }
  };

  const handleSortChange = (event) => {
    setSortByPrice(event.target.value);
  };

  useEffect(() => {
    if (selectedCategories.length != 0) {
      dispatch(fILTERProductApibycategory(selectedCategories));
    }
  }, [selectedCategories]);

  useEffect(() => {
    if (selectedBrands.length != 0) {
      dispatch(fILTERProductApibrand(selectedBrands));
    }
  }, [selectedBrands]);

  useEffect(() => {
    if (selectedSubcategories.length != 0) {
      dispatch(fILTERProductApisubcategory(selectedSubcategories));
    }
  }, [selectedSubcategories]);

  const sortProductsByPrice = (products, order) => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      const priceA = parseFloat(a.price); // Assuming your price is a numeric value
      const priceB = parseFloat(b.price);
      if (order === "lowToHigh") {
        return priceA - priceB;
      } else if (order === "highToLow") {
        return priceB - priceA;
      }
      return 0;
    });
    return sortedProducts;
  };

  const sortedData = sortByPrice
    ? sortProductsByPrice(Filterdata, sortByPrice)
    : Filterdata;

  return (
    <Stack
      display={"flex"}
      flexDirection={"row"}
      sx={{
        padding: {
          sm: 4,
          md: 4,
        },
      }}
    >
      {open && (
        <Stack
          sx={{
            flex: 2,
            position: "sticky",
            top: "19%",
            height: "100%",
          }}
        >
          <form>
            <h2 className="text-gray-800 font-bolder mb-2 text-lg">
              Categories
            </h2>
            {[...new Set(data.map((product) => product.category))].map(
              (category) => (
                <div key={category}>
                  <label className="flex gap-1 items-center mb-2.5">
                    <input
                      type="checkbox"
                      value={category}
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                    />
                    {category}
                  </label>
                </div>
              )
            )}

            <hr />
            <h2 className="text-gray-800 font-bolder mb-2 text-lg">
              Subcategory
            </h2>
            {/* Subcategory checkboxes */}
            {[...new Set(data.map((product) => product.subcategory))].map(
              (subcategory) => (
                <div key={subcategory}>
                  <label className="flex gap-1 items-center mb-2.5">
                    <input
                      type="checkbox"
                      value={subcategory}
                      checked={selectedSubcategories.includes(subcategory)}
                      onChange={() => handleSubcategoryChange(subcategory)}
                    />
                    {subcategory}
                  </label>
                </div>
              )
            )}

            <hr />
            <h2 className="text-gray-800 font-bolder mb-2 text-lg">Brands</h2>
            {[...new Set(data.map((product) => product.brand))].map((brand) => (
              <div key={brand}>
                <label className="flex gap-1 items-center mb-2.5">
                  <input
                    type="checkbox"
                    value={brand}
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                  />
                  {brand}
                </label>
              </div>
            ))}
          </form>
        </Stack>
      )}

      <Stack flex={7} >
        <div className="flex mt-4 p-3 justify-between items-center">
          <h1
            className="text-gray-800 text-md flex items-center cursor-pointer gap-1"
            onClick={() => setOpen(!open)}
          >
            {open ? <FilterAltIcon /> : <FilterAltOffIcon />}
            Filter
          </h1>
          <FormControl sx={{ width: "200px" }}>
            <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sortByPrice}
              label="Sort By"
              onChange={handleSortChange}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="lowToHigh">Low to High</MenuItem>
              <MenuItem value="highToLow">High to Low</MenuItem>
            </Select>
          </FormControl>
        </div>

        <Stack
          flexDirection={"row"}
          justifyContent={"center"}
          flexWrap={"wrap"}
        >
          {sortedData.map((ele, i) => {
            return <Mycard data={ele} key={i} />;
          })}
        </Stack>
      </Stack>
    </Stack>
  );
}
