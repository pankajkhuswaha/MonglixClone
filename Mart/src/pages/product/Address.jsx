import { useDispatch, useSelector } from "react-redux";
import numberFormat from "../../essentail/numberFormat";
import { useFormik } from "formik";
import { VerifyApi, addAddress } from "../../features/authSlice";
import { useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { base_url } from "../../utils/baseUrl";

const Address = () => {
  const site = useSelector((st) => st.site.data);
  const user = useSelector((st) => st.auth.user)?.user;
  const { carts } = useSelector((state) => state.cart);
  const adress = user?.address;
  const [selctedAdr, setselctedAdr] = useState(adress[0] || null);
  const [viewform, setviewform] = useState(false);

  const dispatch = useDispatch();
  const { values, handleSubmit, handleChange, resetForm } = useFormik({
    initialValues: {
      name: user?.name,
      email: user?.email,
      mobile: user?.mobile,
      adr: "",
      city: "",
      pincode: "",
      state: "",
    },
    onSubmit: (values) => {
      dispatch(addAddress({ address: values }))
        .then(unwrapResult)
        .then(() => {
          dispatch(VerifyApi());
          resetForm();
          setviewform(!viewform);
        });
    },
  });

  return (
    <div>
      <div className="relative mx-auto w-full">
        <div className="grid grid-cols-10">
          <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-10">
            <div className="mx-auto w-full max-w-lg">
              <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
                Secure Checkout
              </h1>
              <p className="text-gray-800 font-medium">Customer information</p>
              <div className="flex flex-col gap-3 mt-2">
                {adress?.map((adrr, i) => {
                  const { _id, name, mobile, adr, city, state, pincode } = adrr;
                  const isSelected = _id === selctedAdr?._id;
                  return (
                    <div
                      key={_id}
                      onClick={() => setselctedAdr(adrr)}
                      className={`flex gap-2 items-start border ${
                        (selctedAdr ? isSelected : i == 0)
                          ? "bg-blue-50"
                          : "bg-white"
                      } p-2 rounded shadow-sm cursor-pointer`}
                    >
                      <input
                        type="radio"
                        name="address"
                        className="mt-2"
                        checked={selctedAdr ? isSelected : i == 0}
                        style={{ accentColor: site.primarybg }}
                        onChange={() => setselctedAdr(adrr)}
                      />
                      <div className="text-gray-600 font-semibold">
                        <p>
                          <span>{name}</span> <span>{mobile}</span>
                        </p>
                        <span className="rPNEXT Br27Zz">
                          {adr}, {city},{state} -{" "}
                          <span className="">{pincode}</span>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between">
                <button
                  className="btn mt-2 text-white"
                  onClick={() => setviewform(!viewform)}
                  style={{ background: site.primarybg }}
                >
                  Add New Address
                </button>
                {viewform && (
                  <button
                    className="btn mt-2 btn-danger text-xl rounded-full flex items-center pb-2 justify-center w-8 h-8"
                    onClick={() => setviewform(!viewform)}
                  >
                    x
                  </button>
                )}
              </div>
              {viewform && (
                <form className="w-full rounded" onSubmit={handleSubmit}>
                  <div className="mt-3">
                    <label className="block text-sm text-gray-00">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter Product name"
                    />
                  </div>
                  <div className="row">
                    <div className="mt-3 col-12 col-md-6">
                      <label className="block text-sm text-gray-00">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter Product name"
                      />
                    </div>
                    <div className="mt-3 col-12 col-md-6">
                      <label className="block text-sm text-gray-00">
                        Mobile
                      </label>
                      <input
                        type="number"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Enter Product name"
                      />
                    </div>
                  </div>
                  <div className="mt-3">
                    <label className="block text-sm text-gray-600">
                      Adress
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="adr"
                      value={values.adr}
                      onChange={handleChange}
                      placeholder="Your Adderss"
                    />
                  </div>

                  <div className="mt-3">
                    <label className="text-sm block text-gray-600">City</label>
                    <input
                      className="form-control"
                      type="text"
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                      required
                      placeholder="Enter your city"
                    />
                  </div>
                  <div className="inline-block mt-3 w-1/2 pr-1">
                    <label className="block text-sm text-gray-600">State</label>
                    <input
                      className="form-control"
                      type="text"
                      name="state"
                      value={values.state}
                      onChange={handleChange}
                      placeholder="Enter your state"
                      required
                    />
                  </div>
                  <div className="inline-block mt-3 -mx-1 pl-1 w-1/2">
                    <label className="block text-sm text-gray-600">
                      Pincode
                    </label>
                    <input
                      className="form-control"
                      type="number"
                      name="pincode"
                      value={values.pincode}
                      onChange={handleChange}
                      placeholder="Enter your pincode"
                      required
                    />
                  </div>
                  <button
                    className="btn btn-primary text-white mt-4"
                    style={{
                      borderColor: site.primarybg,
                      background: site.primarybg,
                    }}
                  >
                    Add Address
                  </button>
                </form>
              )}
            </div>
          </div>
          <div className="sticky col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
            <div className=" border text-dark p-4 rounded shadow">
              <h2
                className="font-bold border-b-2 w-fit text-center  pb-1 mb-3"
                style={{ borderColor: site?.primarybg }}
              >
                Order summary
              </h2>

              <ul className="space-y-5">
                <li className="flex flex-wrap gap-4">
                  {carts.products?.map((ele, i) => {
                    const { url, name, total } = ele;

                    return (
                      <div key={i} className="flex justify-between w-full">
                        <div className="flex gap-2">
                          <img src={url} alt="" className="max-h-16 w-16" />
                          <p className="font-semibold mr-4 text-muted text-sm">
                            {name}
                          </p>
                        </div>
                        <p className="text-sm font-semibold">
                          {numberFormat(total)}{" "}
                        </p>
                      </div>
                    );
                  })}
                </li>
              </ul>
              <div
                style={{ background: site.primarybg }}
                className="my-4 h-0.5 w-full bg-opacity-30"
              ></div>
              <div className="space-y-2">
                <div className="flex justify-between text-lg font-bold">
                  <p>Total Payable:</p>
                  <p style={{ fontWeight: "bold" }}>
                    {numberFormat(carts.totalCartValue)}{" "}
                    <del className="text-danger">
                      {carts.totalProductPrice}₹
                    </del>
                  </p>
                </div>
              </div>
              <div>
                <p className="mt-10 text-center text-sm font-semibold text-gray-500">
                  By placing this order you agree to the{" "}
                  <a
                    href="#"
                    className="whitespace-nowrap text-red-600 underline hover:red-pink-800"
                  >
                    Terms and Conditions
                  </a>
                </p>
                <form
                  action={`${base_url}payment/cod`}
                  method="POST"
                  className="navButtonss "
                >
                  <input
                    type="hidden"
                    name="amount"
                    value={carts.totalProductPrice}
                  />
                  <input type="hidden" name="userid" value={localStorage.getItem('token')} />
                  <input type="hidden" name="paymentMEthod" value="cod" />
                  <input type="hidden" name="address" value={selctedAdr?._id} />
                  <button
                    type="submit"
                    style={{ background: site.primarybg }}
                    className="mt-4 inline-flex w-full items-center justify-center rounded  py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2  sm:text-lg"
                  >
                    Confirm Order
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
