import { useLocation } from "react-router-dom";
import { Stack } from "@mui/material";
import numberFormat from "../../essentail/numberFormat";
import parse from "html-react-parser";
import SelectImage from "./SelectImage";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const location = useLocation();
  const data = location.state;
  const SingleProductData = data || localStorage.getItem("SingleProductData");
  const user = useSelector((state) => state.auth?.user?.user);
  const {
    images,
    price,
    platinumdiscount,
    golddiscount,
    silverdiscount,
    retaildiscount,
  } = SingleProductData;
  return (
    <div>
      {SingleProductData ? (
        <Stack display={"flex"} flexWrap={"wrap"} flexDirection={"row"}>
          <Stack flex={5}>
            <SelectImage img={images} data={SingleProductData} />
          </Stack>
          <Stack position={"sticky"} flex={5} p={3}>
            <div className="p-3 border-1 rounded-md">
              <p className="text-xl font-[600] text-gray-500">
                {SingleProductData.name}
              </p>
              {/* price - (price * discountPercentage) / 100 */}
              <p className="text-3xl py-2 font-bold text-[#353543]">
                {!user && numberFormat(price - (price * retaildiscount) / 100)}
                {(user?.role == "user" || user?.role == "admin") &&
                  numberFormat(price - (price * retaildiscount) / 100)}
                {user?.role == "silver" &&
                  numberFormat(price - (price * silverdiscount) / 100)}
                {user?.role == "gold" &&
                  numberFormat(price - (price * golddiscount) / 100)}
                {user?.role == "platinum" &&
                  numberFormat(price - (price * platinumdiscount) / 100)}
              </p>
              <p className="text-lg text-danger font-bold">
                <del>{numberFormat(price)}</del>
                {!user && <sup> {retaildiscount}%</sup>}
                {(user?.role == "user" || user?.role == "admin") && (
                  <sup> {retaildiscount}%</sup>
                )}
                {user?.role == "silver" && <sup> {silverdiscount}%</sup>}
                {user?.role == "gold" && <sup> {golddiscount}%</sup>}
                {user?.role == "platinum" && <sup> {platinumdiscount}%</sup>}
              </p>
            </div>

            <div className="p-3 border-1 rounded-md my-6">
              <p className="text-2xl font-[600] py-2 text-[#353543]">
                Product Details
              </p>
              <p className="text-lg font-[400] text-gray-500">
                {parse(SingleProductData.mindiscription)}
              </p>
            </div>
          </Stack>
        </Stack>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ProductDetail;
