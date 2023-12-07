
import  { useState } from "react";
import { useSelector } from "react-redux";
import LftDrawer from "../../components/bottomdrawer/LftDrawer";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import Mycard from "../../components/productslider/card/Mycard";
import {
  Stack,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { SideFilter } from "../../components/SideFilter/SideFilter";

export default function Productpage() {
  const [open, setOpen] = useState(true);
  const data = useSelector((state) => state.products.products);
  const Filterdata = useSelector((state) => state.products.filterData);

  const [sortByPrice, setSortByPrice] = useState("");
  const handleSortChange = (event) => {
    setSortByPrice(event.target.value);
  };

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

  let Products = Filterdata.length > 0 ? Filterdata : data;

  // Sort the products if sortByPrice is set
  if (sortByPrice === "lowToHigh" || sortByPrice === "highToLow") {
    Products = sortProductsByPrice(Products, sortByPrice);
  }

  return (
    <div className="">
      <Stack
        display={"flex"}
        gap={2}
        flexDirection={"row"}
        sx={{
          padding: {
            sm: 4,
            md: 0,
          },
        }}
      >
        {open && (
          <Stack
            display={{ xs: "none", md: "block" }}
            sx={{
              flex: 2,
              position: "sticky",
              top: "19%",
              height: "100%",
            }}
          >
            <SideFilter />
          </Stack>
        )}

        <Stack flex={7}>
          <div className="flex p-2 md:p-0 justify-between items-center">
            <h1
              className="text-gray-800 text-md flex items-center cursor-pointer gap-1"
              onClick={() => setOpen(!open)}
            >
              <div className=" hidden items-center md:flex">
                {open ? <FilterAltIcon /> : <FilterAltOffIcon />}
                Filter
              </div>
              <div className="block md:hidden">
                <LftDrawer />
              </div>
            </h1>
            <FormControl sx={{ width: { xs: "100px", sm: "200px" } }}>
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

          <div className="row justify-center"
          >
            {Products.map((ele, i) => {
              return <Mycard data={ele} key={i} />;
            })}
          </div>
        </Stack>
      </Stack>
    </div>
  );
}
