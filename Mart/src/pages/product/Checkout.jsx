import React, { useEffect } from "react";
import "./checkout.css";
import numberFormat from "../../essentail/numberFormat";
import { BsTruck } from "react-icons/bs";
import { deleteCart, updateCart, userCart } from "../../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Slider, Stack } from "@mui/material";
const Checkout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCart());
  }, []);

  const { carts } = useSelector((state) => state.cart);
  console.log(carts);

  return (
    <>
      <section className="section m-3">
        <div className="container">
          <div className="flex justify-between  flex-wrap ">
            <div class="rounded-lg md:w-[60%] mt-[12px]">
              {carts.products?.map((value, index) => {
                const { url, name, price, count, _id } = value;
                return (
                  <div class="justify-between mb-4 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <img
                      src={url}
                      alt="product-image"
                      class="w-full rounded-lg sm:w-40"
                    />
                    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div class="mt-5 sm:mt-0">
                        <h2 class="text-lg font-bold text-gray-900">{name}</h2>
                        <p class="mt-1 text-md text-gray-700">
                          {numberFormat(price)}
                        </p>
                      </div>
                      <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div class="flex items-center border-gray-100">
                          <span
                            onClick={() => {
                              dispatch(userCart()),
                                dispatch(updateCart({ id: _id, type: "dec" }));
                            }}
                            class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                          >
                            -
                          </span>
                          <input
                            class="h-8 w-8 border bg-white text-center text-xs outline-none"
                            disabled
                            defaultValue="1"
                            value={count}
                            name="quantity"
                          />
                          <span
                            class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                            onClick={() => {
                              dispatch(userCart()),
                                dispatch(updateCart({ id: _id, type: "inc" }));
                            }}
                          >
                            +
                          </span>
                        </div>
                        <div class="flex items-center space-x-4">
                          <p class="text-sm"> {numberFormat(price * count)} </p>
                          <svg
                            onClick={() => dispatch(deleteCart(_id))}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
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
            <div className="col-sm-4 ">
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
                      class="product-desc-listing flex-full "
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

                        <span id="CartAmtFirst"> Items</span>
                      </li>
                      <li>
                        <h4>Advance Monthly Rental</h4>
                        <span id="CartAmtFirst">
                          {/* <i class="rupees-symbol">₹</i> {`${total_amt}.00`} */}
                        </span>
                      </li>
                      <li>
                        <h4>Refundable Deposit</h4>
                        <span id="CartSAmtFirst">
                          <i class="rupees-symbol">₹</i> 500.00
                        </span>
                      </li>
                      <li>
                        <h4>Taxes</h4>
                        <span id="gstTaxValFirst">
                          <i class="rupees-symbol">₹</i> 100.00{" "}
                        </span>
                      </li>
                      <li class="d-none">
                        <h4>GST (28 %)</h4>
                        <span id="gstTaxValFirst_28">
                          <i class="rupees-symbol">₹</i> 0.00{" "}
                        </span>
                      </li>
                      <li>
                        <h4>Total</h4>
                        <span
                          id="CartCartGAmtFirst"
                          style={{ fontWeight: "bold" }}
                        >
                          <i class="rupees-symbol"></i>{" "}
                          {numberFormat(carts.totalCartValue)}
                        </span>
                      </li>
                    </ul>
                    <button
                      style={{
                        background: "#0D6EFD",
                        color: "white",
                        padding: "12px",
                        borderRadius: "10px",
                        width: " 100%",
                      }}
                    >
                      <p>CheckOut</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* )}
      {qty === 0 && <EmptyCart />} */}
    </>
  );
};

export default Checkout;
