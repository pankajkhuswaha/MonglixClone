import React from "react";
import { useDispatch, useSelector } from "react-redux";
import numberFormat from "../../essentail/numberFormat";
import { useFormik } from "formik";
import { addAddress } from "../../features/authSlice";

const Address = () => {
  const site = useSelector((st) => st.site.data);
  const user = useSelector((st) => st.auth.user)?.user;
  const { carts } = useSelector((state) => state.cart);
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
      dispatch(addAddress({address:values}))
    },
  });
  return (
    <div>
      <div className="relative mx-auto w-full">
        <div className="grid grid-cols-10">
          <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
            <div className="mx-auto w-full max-w-lg">
              <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
                Secure Checkout
              </h1>
              <form className="w-full rounded" onSubmit={handleSubmit}>
                <p className="text-gray-800 font-medium">
                  Customer information
                </p>
                <div className="mt-3">
                  <label className="block text-sm text-gray-00">Name</label>
                  <input
                    type="text"
                    name="name"
                    readOnly
                    value={values.name}
                    className="form-control"
                    placeholder="Enter Product name"
                  />
                </div>
                <div className="row">
                  <div className="mt-3 col-12 col-md-6">
                    <label className="block text-sm text-gray-00">Email</label>
                    <input
                      type="text"
                      name="email"
                      readOnly
                      value={values.email}
                      className="form-control"
                      id="productname"
                      placeholder="Enter Product name"
                    />
                  </div>
                  <div className="mt-3 col-12 col-md-6">
                    <label className="block text-sm text-gray-00">Mobile</label>
                    <input
                      type="number"
                      name="mobile"
                      readOnly
                      value={values.mobile}
                      className="form-control"
                      id="productname"
                      placeholder="Enter Product name"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <label className="block text-sm text-gray-600">Adress</label>
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
                  <label className="block text-sm text-gray-600">Pincode</label>
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
                  style={{ borderColor: site.primarybg, background: site.primarybg }}
                >
                  Add Address
                </button>
              </form>
            </div>
          </div>
          <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
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
                    const { url, name, price, count } = ele;

                    return (
                      <div key={i} className="flex justify-between">
                        <div className="inline-flex">
                          <img src={url} alt="" className="max-h-16 w-16" />
                          <div className="ml-3">
                            <p className="font-semibold mr-4 text-muted text-sm">
                              {name}
                            </p>
                          </div>
                          <p className="text-sm font-semibold">
                            {numberFormat(price * count)}{" "}
                          </p>
                        </div>
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
                <p className="flex justify-between text-lg font-bold">
                  <span>Total Payable:</span>
                  <span>{numberFormat(carts.totalCartValue)}</span>
                </p>
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
                <button
                  type="submit"
                  style={{ background: site.primarybg }}
                  className="mt-4 inline-flex w-full items-center justify-center rounded  py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2  sm:text-lg"
                >
                  Place Order
                </button>
              </div>
            </div>
            {/* <div className="relative mt-3">
              <h3 className="mb-2 text-lg font-bold">Support</h3>
              <p className="text-sm font-semibold">
                +01 653 235 211{" "}
                <span className="font-light">(International)</span>
              </p>
              <p className="mt-1 text-sm font-semibold">
                support@nanohair.com <span className="font-light">(Email)</span>
              </p>
              <p className="mt-2 text-xs font-medium">
                Call us now for payment related issues
              </p>
            </div>
            <div className="relative mt-2 flex">
              <p className="flex flex-col">
                <span className="text-sm font-bold">
                  Money Back Guarantee
                </span>
                <span className="text-xs font-medium">
                  within 30 days of purchase
                </span>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;