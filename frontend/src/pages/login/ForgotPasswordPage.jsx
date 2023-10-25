import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from 'react-redux';
import { forgotPasswordToken } from "./apis";

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await forgotPasswordToken({ email });
            if (res.error) {
                toast.error(res.error);
            } else {
                toast.success("Reset PassWord Link is sent to Our Email.");
            }
        } catch (error) {
            toast.error(error.message);
        }
    };
    const site = useSelector(st=>st.site?.data)
    return (
      <div className="">
        {/* Container */}
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12 ">
            {/* Row */}
            <div className="w-full xl:w-[35%] lg:w-[45%] flex shadow rounded">
              <div className="w-full bg-white p-2 rounded-lg lg:rounded-l-none">
                <div className="px-8 mb-4 text-center">
                  <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
                  <p className="mb-4 text-sm text-gray-700">
                    We get it, stuff happens. Just enter your email address
                    below and {"we'll"}send you a link to reset your password!
                  </p>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                >
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Email Address..."
                    />
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      style={{ background: site?.primarybg }}
                      className="w-full px-4 py-2 font-bold text-white rounded-full focus:outline-none focus:shadow-outline"
                      type="sumit"
                    >
                      Reset Password
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <Link
                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      to={"/login"}
                    >
                      Create an Account!
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link
                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      to={"/login"}
                    >
                      Already have an account? Login!
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ForgotPasswordPage;
