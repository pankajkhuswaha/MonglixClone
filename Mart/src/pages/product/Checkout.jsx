import React, { useEffect } from "react";
import "./checkout.css";
import { BsTruck } from "react-icons/bs";
import { updateCart, userCart } from "../../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
// import { decqty, incqty } from "../../features/products/CartSlice";
import { Slider, Stack } from "@mui/material";
const Checkout = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cart);
  console.log(carts);

  return (
    <>
      <section className="section m-3">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 flex items-center">
              <div
                className="card text-center "
                style={{ position: "relative", padding: "0px" }}
              >
                <div
                  className="card-header   d-flex justify-content-center align-items-center flex-row"
                  style={{ background: "rgb(206, 237, 240)" }}
                >
                  Rent Cart 1 Items
                </div>
                {carts.products?.map((value, index) => {
                  const { url, name, price, count, _id } = value;
                  return (
                    <>
                      <div className="card-body d-flex justify-between">
                        <div className="img w-50 ">
                          <img src={url} width={"100%"} height={100} />
                        </div>
                        <div className="content w-100">
                          <h5 className="text-3xl" style={{}}>
                            {name}
                          </h5>
                          <p
                            style={{
                              cursor: "pointer",
                              boxSizing: "border-box",
                              padding: 0,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "10px",
                              margin: "0px 0px 20px 0px",
                              fontFamily: "Work Sans",
                              fontSize: "1em",
                              fontWeight: 400,
                              color: "rgb(119, 119, 119)",
                              lineHeight: 1.3,
                            }}
                          >
                            <BsTruck />
                            Fast Delivery
                          </p>
                          <div
                            className="muibox d-flex align-items-center gap-2 justify-content-center "
                            style={{
                              marginTop: "-15px",
                              marginBottom: "20px",
                              padding: "10px",
                              position: "relative",
                            }}
                          >
                            <p
                              className="card-text"
                              style={{
                                margin: "0 8px 0 0",
                                fontSize: "100%",
                                fontWeight: 500,
                                color: "rgb(188, 188, 188)",
                                textDecoration: "line-through",
                                lineHeight: 1.3,
                              }}
                            >
                              ₹{price}
                            </p>
                            <p
                              className="card-text"
                              style={{
                                fontSize: "1em",
                                fontWeight: 600,
                                color: "rgb(34, 34, 34)",
                                padding: "4px 8px",
                                borderRadius: "9px",
                                backgroundColor: "rgb(255, 245, 183)",
                                lineHeight: 1.3,
                              }}
                            >
                              10%
                            </p>
                            <p
                              className="card-text"
                              style={{
                                cursor: "pointer",
                                boxSizing: "border-box",
                                padding: 0,
                                margin: "0px",
                                fontFamily: "Work Sans",
                                fontSize: "20px",
                                fontWeight: 600,
                                color: "rgb(34, 34, 34)",
                                lineHeight: 1.3,
                              }}
                            >
                              {price * count}
                            </p>
                          </div>

                          <div
                            className="qty-icons"
                            style={{
                              zIndex: "1",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignContent: "center",
                              alignItems: "center",
                              marginTop: "-15px",
                            }}
                          >
                            <div style={{ display: "flex" }}>
                              <button
                                className="btn btn-icon btn-primary minus"
                                style={{
                                  boxSizing: "border-box",
                                  margin: "0",
                                  textDecoration: "none",
                                  fontSize: "15px",
                                  letterSpacing: ".5px",
                                  transition: "all .3s",
                                  borderRadius: "5px",
                                  cursor: "pointer",
                                  outline: "0",
                                  height: "36px",
                                  width: "36px",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  marginBottom: "10px",
                                }}
                                onClick={() => {
                                  dispatch(userCart()),
                                    dispatch(
                                      updateCart({ id: _id, type: "dec" })
                                    );
                                }}
                              >
                                -
                              </button>
                              <input
                                style={{
                                  boxSizing: "border-box",
                                  margin: "0 10px",
                                  outline: "0",
                                  textDecoration: "none",
                                  fontSize: "15px",
                                  letterSpacing: ".5px",
                                  transition: "all .3s",
                                  borderRadius: "5px",
                                  height: "36px",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  padding: "0",
                                  pointerEvents: "none",
                                  width: "100px",
                                }}
                                type="text"
                                className="btn btn-primary "
                                min="0"
                                defaultValue="dfkh"
                                value={count}
                                name="quantity"
                              />
                              <button
                                className="btn btn-icon btn-primary plus"
                                style={{
                                  boxSizing: "border-box",
                                  textDecoration: "none",
                                  fontSize: "15px",
                                  letterSpacing: ".5px",
                                  transition: "all .3s",
                                  borderRadius: "5px",
                                  cursor: "pointer",
                                  outline: "0",
                                  height: "36px",
                                  width: "36px",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  padding: "0",
                                }}
                                onClick={() => {
                                  dispatch(userCart()),
                                    dispatch(
                                      updateCart({ id: _id, type: "inc" })
                                    );
                                }}
                              >
                                +
                              </button>
                            </div>

                            {/*  */}

                            {/*  */}
                          </div>
                        </div>
                      </div>
                      <hr />
                    </>
                  );
                })}
              </div>
            </div>

            <div className="col-sm-4 mt-3">
              <div
                className=""
                style={{
                  boxSizing: "border-box",
                  margin: "15px 0 0 0",
                  cursor: "pointer",
                  background: "rgb(243, 243, 243)",
                  borderRadius: "8px",
                  fontFamily: "Work Sans",
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "1.3",
                }}
              >
                <div
                  className="cursor-pointer MuiBox-root"
                  style={{
                    boxSizing: "border-box",
                    margin: "0",
                    cursor: "pointer",
                    padding: "28px 32px",
                    background: "rgb(243, 243, 243)",
                    borderRadius: "8px",
                    fontFamily: "Work Sans",
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "1.3",
                  }}
                >
                  <div
                    className="MuiBox-root "
                    style={{
                      cursor: "pointer",
                      boxSizing: "border-box",
                      padding: "0",
                      margin: "0",
                      height: "auto",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      flexWrap: "nowrap",
                      flexShrink: "0",
                      flexGrow: "0",
                      fontFamily: "Work Sans",
                      fontSize: "16px",
                      fontWeight: "500",
                      lineHeight: "1.3",
                    }}
                  >
                    <h1
                      className="MuiTypography-root MuiTypography-body1"
                      style={{
                        cursor: "pointer",
                        boxSizing: "border-box",
                        padding: "0",
                        margin: "0",
                        fontFamily: "Work Sans",
                        fontSize: "26px",
                      }}
                    >
                      Rent Cart Breakup
                    </h1>
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="24"
                        height="24"
                        rx="12"
                        fill="#76CDD6"
                      ></rect>
                      <path
                        d="M8.5 12h7M12 8.5l3.5 3.5-3.5 3.5"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <hr className="mt-3 mb-3" />
                  <div
                    className="MuiBox-root "
                    style={{
                      cursor: "pointer",
                      boxSizing: "border-box",
                      padding: "0",
                      margin: "0",
                      height: "auto",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      flexWrap: "nowrap",
                      flexShrink: "0",
                      flexGrow: "0",
                    }}
                  >
                    {/* total product logic================== */}
                    <p className="MuiTypography-root MuiTypography-body1 ">
                      Total Payable
                    </p>
                    {/* {cartdata.map((value, index) => {
                        console.log(value);
                        return (
                          <> */}
                    <p className="MuiTypography-root MuiTypography-P_SemiBold css-cyezfc d-flex flex-column">
                      {/* ₹{value.price * value.qty} */}
                    </p>
                    {/* </>
                        );
                      })} */}
                  </div>
                </div>
              </div>

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
                          <h4> Rent Cart</h4>
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
                          <i class="rupees-symbol">₹</i>{" "}
                          {/* {`${total_amt + 100.0 + 500.0}.00 `} */}
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
