import Buttonele from "../../../components/button/Buttonele";
import { ProfileResetApi } from "../../../features/userSlice";
import { VerifyApi } from "../../../features/authSlice";
import { useFormik } from "formik";
 import { toast } from "react-toastify";
import { useDispatch ,useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
const Profile = () => {
  const data = useSelector((state) => state.user.value);
  console.log(data);
  const dispatch = useDispatch();

 const formik = useFormik({
   initialValues: {
     name: "",
     email: "",
     number: "",
   },
   onSubmit: (values) => {
     dispatch(ProfileResetApi(values))
       .then(unwrapResult)
       .then(() => {
         toast.success("Profile Updated Successfully!");
         formik.resetForm();
         dispatch(VerifyApi())
       })
   },
 });



  return (
    <>
      <section className=" bg-blueGray-50">
        <div className="w-full  px-0 md:px-4 mx-auto mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">Profile</h6>
              </div>
            </div>
            <hr className="mx-6 border-b-1 border-blueGray-300" />
            <div className="flex-auto mt-3 px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={formik.handleSubmit}>
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
                        type="text"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow w-full ease-linear transition-all duration-150"
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
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow w-full ease-linear transition-all duration-150"
                        placeholder="Enter Email "
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
                        name="number"
                        onChange={formik.handleChange}
                        value={formik.values.number}
                        type="number"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow w-full ease-linear transition-all duration-150"
                        placeholder="Enter Mobile Number "
                      />
                    </div>
                  </div>
                </div>
                <div type='submit' className="w-[20%] mx-auto pt-3 ">
                  <Buttonele title={"Save"} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
