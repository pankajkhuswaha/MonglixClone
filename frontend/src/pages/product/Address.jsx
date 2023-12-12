import { useDispatch, useSelector } from "react-redux";
import numberFormat from "../../essentail/numberFormat";
import { useFormik } from "formik";
import { VerifyApi, addAddress } from "../../features/authSlice";
import { useEffect, useRef, useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { base_url } from "../../utils/baseUrl";
import Buttonele from "../../components/button/Buttonele";
import LoadButele from "../../components/button/LoadButele";
import { Link } from "react-router-dom";
import { applyCouponcode } from "../../features/cartSlice";
import { toast } from "react-toastify";

const Address = () => {
  const site = useSelector((st) => st.site.data);
  const user = useSelector((st) => st.auth.user)?.user;
  const { carts } = useSelector((state) => state.cart);
  const adress = user?.address;
  const codeField = useRef(false);
  const [selctedAdr, setselctedAdr] = useState(null);
  const [viewform, setviewform] = useState(false);
  const [showm, setShowm] = useState("")
  useEffect(() => {
    if (adress?.length > 0) {
      setselctedAdr(adress[0]);
    }
    if(user?.cart?.isCouponApplied?.code){
      setShowm("Your coupon is applied")
    }else{
      setShowm("")
    }
  }, [user]);


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
      gstNo:user?.gstNo
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
  const [couponCode, setCouponCode] = useState("");
  const handleCouponCode = (e) => {
    e.preventDefault();
    dispatch(applyCouponcode({ code: couponCode }))
      .then(unwrapResult)
      .then(() => {
        codeField.current.style.border = "2px solid green";
        // codeField.current.style.boxShadow = "0 0 5px green";
        setShowm("Coupon code is sucessfully applied")
        dispatch(VerifyApi())
      });
  };

  return (
    <div className="container">
      <div className="flex flex-row flex-wrap justify-between ">
        <div className="md:w-[60%] w-full pb-3 md:pr-8">
          <h1 className="relative text-4xl font-bold  text-gray-600 ">
            Secure Checkout
          </h1>
          <p className="text-gray-600 mt-3 text-xl font-semibold">
            Customer information
          </p>
          <div className="flex flex-col gap-3 mt-2">
            {adress?.map((adrr, i) => {
              const { _id, name, mobile, adr, city, state, pincode } = adrr;
              const isSelected = _id === selctedAdr?._id;
              return (
                <div
                  key={_id}
                  onClick={() => setselctedAdr(adrr)}
                  className={`flex gap-2 p-3 w-full items-start border ${
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
                  <div className="text-gray-600 text-lg font-semibold">
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
          <div className="flex mt-4 justify-between">
            <button
              className="btn mt-1 text-white"
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
                  placeholder="Enter Name"
                />
              </div>
              <div className="row">
                <div className="mt-3 col-12 col-md-6">
                  <label className="block text-sm text-gray-00">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="mt-3 col-12 col-md-6">
                  <label className="block text-sm text-gray-00">Mobile</label>
                  <input
                    type="number"
                    name="mobile"
                    value={values.mobile}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter Mobile Number"
                  />
                </div>
                <div className="mt-3 col-12">
                  <label className="block text-sm text-gray-00">Enter GST No.</label>
                  <input
                    type="text"
                    name="gstNo"
                    value={values.gstNo}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter GST Number"
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
        <div className="sticky md:w-[40%] w-full">
          <div className=" border text-dark p-4 rounded shadow">
            <h2
              className="font-bold text-xl border-b-2 w-fit text-center  pb-1 mb-3"
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
                        <img src={url} alt="" className="max-h-28 w-16" />
                        <p className="font-semibold text-gray-900 mr-4  text-md">
                          {name}
                        </p>
                      </div>
                      <p className="text-md text-gray-700 font-semibold">
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
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                <input
                  className="border-[2px] w-[76%]  border-gray-500 rounded-md p-2 text-md text-gray-600 font-semibold "
                  type="text"
                  ref={codeField}
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  onFocus={(e) => (e.target.style.outline = "none")}
                  placeholder="Apply Discount Coupon"
                />

                <div className="w-[20%]">
                  <Buttonele
                    onClick={(e) => handleCouponCode(e)}
                    title={"submit"}
                  />
                </div>
                {showm && (
                  <>
                    <p className="mb-0 text-green-600 -mt-2 text-start col-12 ml-3">
                      {showm}
                    </p>
                  </>
                )}
              </div>
              {showm && (
                <div className="flex justify-between font-semibold">
                  <p>SubTotal:</p>
                  <p className="text-gray-800">
                    {numberFormat(carts.totalCartValue)}{" "}
                  </p>
                </div>
              )}
              {showm && (
                <div className="flex justify-between text-md  font-semibold">
                  <p>Coupon Discount:</p>
                  <p
                    className="text-green-800"
                    style={{ fontWeight: "semibold" }}
                  >
                    {numberFormat(
                      carts.totalCartValue - user?.cart?.totalValue
                    )}
                  </p>
                </div>
              )}
              <div className="flex justify-between  font-semibold">
                <p>Total Payable:</p>
                <p className="text-gray-800" style={{ fontWeight: "semibold" }}>
                  {numberFormat(user?.cart?.totalValue || carts.totalCartValue)}{" "}
                </p>
              </div>
            </div>
            <div>
              <p className="mt-10 text-center text-md  font-semibold text-gray-700">
                By placing this order you agree to the{" "}
                <Link
                  to="/tc"
                  className="whitespace-nowrap text-red-600 underline hover:red-pink-800"
                >
                  Terms and Conditions
                </Link>
              </p>
              <form
                action={`${base_url}payment/cod`}
                method="POST"
                className="navButtonss "
              >
                <input
                  type="hidden"
                  value={carts.totalProductPrice}
                  name="amount"
                />
                <input
                  type="hidden"
                  name="userid"
                  value={localStorage.getItem("token")}
                />
                <input type="hidden" name="paymentMEthod" value="cod" />
                <input type="hidden" name="address" value={selctedAdr?._id} />

                {selctedAdr ? (
                  <button className="w-full" type="submit">
                    <LoadButele />
                  </button>
                ) : (
                  <p
                    onClick={() =>
                      toast.error("Please Select an address first")
                    }
                    className="btn btn-outline-primary w-full py-2 mt-2 rounded-none "
                  >
                    {" "}
                    confirm Order
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
