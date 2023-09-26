import { useEffect } from "react";
import "./checkout.css";
import EmptyCart from "../../components/emptycart/emptyCart";
import numberFormat from "../../essentail/numberFormat";
import { deleteCart, updateCart, userCart } from "../../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  const cart = useSelector((state) => state.cart.carts);
  const site = useSelector((st) => st.site.data);
  const CartCount = cart.products?.length;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(userCart());
  }, [dispatch]);

  const { carts } = useSelector((state) => state.cart);

  return (
    <>
      {CartCount <= 0 ? (
        <EmptyCart />
      ) : (
        <section className="section m-3">
          <div className="container">
            <div className="flex justify-between  flex-wrap ">
              <div className="rounded-lg md:w-[60%] mt-[12px]">
                {carts.products?.map((value, index) => {
                  const { url, name, price, count, _id, discount, total } =
                    value;
                  return (
                    <div
                      key={index}
                      className="justify-between mb-4 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                    >
                      <img
                        src={url}
                        alt="product-image"
                        className="w-full rounded-lg sm:w-40"
                      />
                      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-0">
                          <h2 className="text-lg font-bold text-gray-900">
                            {name}
                          </h2>
                          <p className="mt-1 text-md text-gray-700">
                            <span className="text-danger">
                              <del>{numberFormat(price)}</del>{" "}
                              <sup>{discount}%</sup>{" "}
                            </span>{" "}
                            <span className="text-primary">
                              {numberFormat(price)}
                            </span>
                          </p>
                        </div>
                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                          <div className="flex items-center border-gray-100">
                            <span
                              onClick={() => {
                                dispatch(userCart()),
                                  dispatch(
                                    updateCart({ id: _id, type: "dec" })
                                  );
                              }}
                              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            >
                              -
                            </span>
                            <input
                              className="h-8 w-8 border bg-white text-center text-xs outline-none"
                              disabled
                              defaultValue="1"
                              value={count}
                              name="quantity"
                            />
                            <span
                              className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                              onClick={() => {
                                dispatch(userCart()),
                                  dispatch(
                                    updateCart({ id: _id, type: "inc" })
                                  );
                              }}
                            >
                              +
                            </span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <p className="text-md font-bold">
                              {" "}
                              {numberFormat(total)}{" "}
                            </p>
                            <svg
                              onClick={() => dispatch(deleteCart(_id))}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/*  */}
              <div className="md:w-[400px] w-full ">
                <div
                  className="MuiBox-root "
                  style={{
                    boxSizing: "border-box",
                    padding: "0",
                    margin: "0",
                    marginTop: "12px",
                  }}
                >
                  <div
                    className="MuiBox-root"
                    style={{
                      boxSizing: "border-box",
                      margin: "0",
                      padding: "20px",
                      background: "white",
                      borderRadius: "8px",
                      boxShadow: "rgba(34, 34, 34, 0.1) 0px 8px 16px",
                    }}
                  >
                    <div
                      className="MuiBox-root"
                      style={{
                        boxSizing: "border-box",
                        marginBottom: "16px",
                      }}
                    >
                      <ul
                        style={{ flexDirection: "column" }}
                        className="product-desc-listing flex-full "
                      >
                        <li>
                          <Stack
                            display={"flex"}
                            alignItems={"center"}
                            gap="7px"
                            flexDirection={"row"}
                          >
                            <svg
                              width="21"
                              height="20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.295 2.929A9.972 9.972 0 0 0 10.223 0a9.971 9.971 0 0 0-7.072 2.929A9.97 9.97 0 0 0 .223 10a9.969 9.969 0 0 0 2.928 7.071A9.972 9.972 0 0 0 10.223 20a9.972 9.972 0 0 0 7.072-2.929A9.97 9.97 0 0 0 20.225 10a9.97 9.97 0 0 0-2.93-7.071Z"
                                fill="#40B6C2"
                              ></path>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.355 5.631a.866.866 0 0 1 1.733 0l.003 3.505 4.566-.005a.866.866 0 0 1 0 1.733l-5.435.005a.866.866 0 0 1-.863-.941L9.355 5.63Z"
                                fill="#fff"
                              ></path>
                            </svg>
                            <h4> Cart</h4>
                          </Stack>
                          <span id="CartAmtFirst"> {CartCount} Items</span>
                        </li>
                        <li>
                          <span id="CartAmtFirst">
                            {/* <i className="rupees-symbol">₹</i> {`${total_amt}.00`} */}
                          </span>
                        </li>
                        <li>
                          <h4>Total</h4>
                          <div>
                            <p style={{ fontWeight: "bold" }}>
                              {numberFormat(carts.totalCartValue)}{" "}
                              <del className="text-danger">
                                {carts.totalProductPrice}₹
                              </del>
                            </p>
                            <p className="text-success">
                              You Saved{" "}
                              {carts.totalProductPrice - carts.totalCartValue} ₹{" "}
                              <br></br>on this purchase
                            </p>
                          </div>
                        </li>
                      </ul>
                      <button
                        style={{
                          background: site?.primarybg,
                          color: "white !important",
                          padding: "12px",
                          borderRadius: "10px",
                          width: " 100%",
                          marginTop: "4px",
                        }}
                        onClick={() => navigate("/checkout-details")}
                      >
                        CheckOut
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* )}
      {qty === 0 && <EmptyCart />} */}
    </>
  );
};

export default Checkout;
