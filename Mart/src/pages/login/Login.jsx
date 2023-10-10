import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import "./login.css";

import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RegisterApi, LoginApi } from "../../features/authSlice";

const Login = () => {
  // const { error, success } = useSelector((state) => state.auth);
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    values: rvalues,
    handleSubmit: rhandleSubmit,
    resetForm: rresetForm,
    handleChange: rhandleChange,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(RegisterApi(values));
      // rresetForm();
    },
  });
  const {
    values: lvalues,
    handleSubmit: lhandleSubmit,
    handleChange: lhandleChange,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(LoginApi(values));
    },
  });

  const handleSignUpClick = (e) => {
    e.preventDefault();
    const container = document.getElementById("container");
    container.classList.add("right-panel-active");
  };

  const handleSignInClick = (e) => {
    e.preventDefault();
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
  };

  return (
    <div className="registration-tab mx-auto">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={rhandleSubmit}>
            <h1>Create Account</h1>

            <span>or use your email for registration</span>
            <input
              className="c"
              required
              name="name"
              onChange={rhandleChange}
              value={rvalues.name}
              type="text"
              placeholder="Name"
            />
            <input
              className="c"
              required
              name="email"
              onChange={rhandleChange}
              type="email"
              placeholder="Email"
            />
            <input
              className="c"
              required
              name="mobile"
              onChange={rhandleChange}
              value={rvalues.mobile}
              type="mobile"
              placeholder="mobile"
            />
            <input
              className="c"
              required
              name="password"
              onChange={rhandleChange}
              value={rvalues.password}
              type="password"
              placeholder="Password"
            />
            <button type="submit">Sign Up</button>
            <p className="hides">
              Have an Account?{" "}
              <span
                onClick={handleSignInClick}
                style={{
                  color: "orangered",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                sign in
              </span>{" "}
            </p>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={lhandleSubmit}>
            <h1>Sign in</h1>
            <span>or use your account</span>
            <input
              className="c"
              name="email"
              onChange={lhandleChange}
              value={lvalues.email}
              type="email"
              placeholder="Email"
            />
            <input
              className="c"
              name="password"
              value={lvalues.password}
              onChange={lhandleChange}
              type="password"
              placeholder="Password"
            />
            Forgot your password? <button>Sign In</button>
            <p className="hides">
              Does not Have an Account?{" "}
              <span
                onClick={handleSignUpClick}
                style={{
                  color: "orangered",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Sign Up
              </span>{" "}
            </p>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p className=" text-white">
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p className=" text-white">
                Enter your personal details and start the journey with us
              </p>
              <button className="ghost" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
