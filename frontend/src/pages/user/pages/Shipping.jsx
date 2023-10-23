import { useState } from "react";
import Buttonele from "../../../components/button/Buttonele";
import { VerifyApi, addAddress } from "../../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { unwrapResult } from "@reduxjs/toolkit";
const Shipping = () => {
  const dispatch = useDispatch();
  const site = useSelector((st) => st.site.data);

  const user = useSelector((st) => st.auth.user)?.user;

  const adress = user?.address;

  const [selctedAdr, setselctedAdr] = useState(null);

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
        });
    },
  });
  return (
    <>
      <section className=" bg-blueGray-50">
        <div className="w-full   px-0 md:px-4 mx-auto mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Add New Address
                </h6>
              </div>
            </div>
            <hr className="mx-6 border-b-1 border-blueGray-300" />
            <div className="flex-auto mt-3 px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Full Name
                      </label>
                      <input
                        name="name"
                        onChange={handleChange}
                        value={values.name}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  w-full ease-linear transition-all duration-150"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Mobile Number
                      </label>
                      <input
                        name="mobile"
                        onChange={handleChange}
                        value={values.mobile}
                        type="number"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  w-full ease-linear transition-all duration-150"
                        placeholder="Enter Mobile Number "
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Address
                      </label>
                      <input
                        name="adr"
                        onChange={handleChange}
                        value={values.adr}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  w-full ease-linear transition-all duration-150"
                        placeholder="Enter Address"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        City
                      </label>
                      <input
                        name="city"
                        onChange={handleChange}
                        value={values.city}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  w-full ease-linear transition-all duration-150"
                        placeholder="Enter City"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        State
                      </label>
                      <input
                        name="state"
                        onChange={handleChange}
                        value={values.state}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  w-full ease-linear transition-all duration-150"
                        placeholder="Enter State "
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Postal Code
                      </label>
                      <input
                        name="pincode"
                        onChange={handleChange}
                        value={values.pincode}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  w-full ease-linear transition-all duration-150"
                        placeholder="Enter Postal Code"
                      />
                    </div>
                  </div>
                </div>
                <div type="submit" className="w-[20%] mx-auto pt-3 ">
                  <Buttonele title={"Save"} />
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Old Address
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12  px-4">
                    <div className="relative w-full  mb-3">
                      {adress?.map((adrr, i) => {
                        const { _id, name, mobile, adr, city, state, pincode } =
                          adrr;
                        const isSelected = _id === selctedAdr?._id;
                        return (
                          <div
                            key={_id}
                            onClick={() => setselctedAdr(adrr)}
                            className={`flex gap-2  items-start border ${
                              (selctedAdr ? isSelected : i == 0)
                                ? "bg-blue-50"
                                : "bg-white"
                            } p-2 rounded shadow-sm mb-2  cursor-pointer`}
                          >
                            <input
                              type="radio"
                              name="address"
                              className="mt-2"
                              checked={selctedAdr ? isSelected : i == 0}
                              style={{ accentColor: site.primarybg }}
                              onChange={() => setselctedAdr(adrr)}
                            />
                            <div className="text-gray-600 ">
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
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shipping;
