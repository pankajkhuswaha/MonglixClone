/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import "./index.css";
import { Link, useLocation } from "react-router-dom";
import { Stack } from "@mui/material";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser } from "../../features/auth/authSlice";

const Cart = () => {
  const [interestRate, setInterestRate] = useState(5);
  const [months, setMonths] = useState(12);
  const [minValue, setminValue] = useState("");
  const maxInterestRate = 20;
  const maxMonths = 48;

  const data = useLocation().state;
  if (!data) {
    return (window.location.href = "https://jhevmotors.com/e-bike");
  }
  const { price, type } = data;
  const maxprice = parseInt(price?.replace(/,/g, "").toLocaleString());
  const [number, setNumber] = useState(minValue);
  useEffect(() => {
    if (type === "bike") {
      setminValue(5100);
      setNumber(5100);
    } else {
      setminValue(2100);
      setNumber(2100);
    }
  }, [type]);
  const TotalLoanAmt = -1 * (number - data.price);
  const principal = TotalLoanAmt;
  const calculateEMI = () => {
    const monthlyInterest = interestRate / 12 / 100;

    const emi =
      (principal * monthlyInterest) /
      (1 - Math.pow(1 + monthlyInterest, -months));
    return emi.toFixed(2);
  };

  const extrapay = calculateEMI() * months - TotalLoanAmt;
  const payable = extrapay + TotalLoanAmt;
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(verifyUser());
  }, []);
  const user = useSelector((st) => st.auth.data);
  return (
    <>
      <div className="flex flex-row flex-wrap cartmain gap-8">
        <div className="flex-[4] justify-center cartimg ">
          <img src={data.images[0]} alt="" />
        </div>
        <div className="flex-[6] w-full cartdetail">
          <h1>{data.name}</h1>
          <p style={{ color: "#282825" }}>
            ₹{data.price} <span className="sp">(Ex-Showroom Price)</span>{" "}
          </p>

          <p style={{ color: "black" }}>Advance Payment</p>
          <div className="flex flex-row items-center flex-wrap md:flex-nowrap gap-3 md:gap-6">
            {/* slider................................ */}
            <div className="w-full md:w-[50%] gap-2">
              <div className="flex justify-center flex-row">
                <span
                  style={{
                    color: "orangered",
                    textAlign: "center",
                    fontSize: "12px",
                  }}
                >
                  &#8377;{minValue}
                  <br />
                  (Advance Payment)
                </span>
                <span
                  style={{
                    color: "orangered",
                    textAlign: "center",
                    fontSize: "12px",
                  }}
                >
                  &#8377;{data.price}
                  <br />
                  (Ex-showroom Price)
                </span>
              </div>
              <input
                className="slider cursor-pointer"
                type="range"
                min={minValue}
                max={maxprice}
                step={50}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>

            <div className="stylediv">
              <input
                type="text"
                style={{ outline: "none" }}
                value={number.toLocaleString()}
                min={minValue}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
          </div>
          <br />

          <div className="flex flex-row gap-2">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <p style={{ color: "#282825" }}>
              I agree to the{" "}
              <Link to={"/terms-and-conditon"} style={{ fontWeight: "bold" }}>
                <span style={{ color: "orangered" }}>Terms & Conditions</span>
              </Link>
            </p>
          </div>
          <span style={{ color: "orangered" }}>
            Please agree to the terms and conditions to proceed.
          </span>
          <br />

          {isChecked && (
            <Link
              to={user?.user ? "/checkout" : "/login"}
              state={{
                price: data.price,
                name: data.name,
                img: data.images[0],
                payable: number,
                _id: data._id,
                userid: user?._id,
              }}
              className="btn-bg text-white w-[100px]"
            >
              {" "}
              Checkout
            </Link>
          )}
          {!isChecked && (
            <p
              className="btn-bg text-white w-[100px] mb-0"
              onClick={() => toast.info("Please accept the term and condition")}
            >
              Checkout
            </p>
          )}
        </div>
      </div>

      {/* Emi calculator */}

      <div
        className="Emi m-[35px] rounded-[10px] p-[20px] flex flex-col justify-center"
        style={{
          boxShadow: "0 3px 10px rgba(0, 0, 0, 0.16)",
        }}
      >
        <h1 className="text-[30px] text-center p-[30px] font-bold">
          Calculate your Loan EMI for {data.name}
        </h1>
        {/* Principal Amount Slider */}
        {/* payment */}

        <div
          className="w-full md:w-[50%] gap-2 "
          style={{
            margin: "14px auto",
          }}
        >
          <div className="flex justify-between flex-row">
            <span
              style={{
                color: "orangered",
                textAlign: "center",
                fontSize: "12px",
              }}
            >
              &#8377;{minValue}
              <br />
              (Advance Payment)
            </span>

            <div className="stylediv">
              <input
                type="text"
                style={{ outline: "none", width: "100%" }}
                value={number.toLocaleString()}
                min={minValue}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
          </div>
          <input
            className="slider"
            type="range"
            min={minValue}
            max={maxprice}
            step={50}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>

        {/* Display EMI */}
        {/* Interest Rate Slider */}

        <div
          className="w-full md:w-[50%] gap-2"
          style={{
            margin: "14px auto",
          }}
        >
          <div className="flex justify-between flex-row">
            <span
              style={{
                color: "orangered",
                textAlign: "center",
                fontSize: "12px",
              }}
            >
              {interestRate}%<br />
              (Interest Rate)
            </span>
            <div className="stylediv">
              <input
                type="text"
                style={{ outline: "none", width: "100%" }}
                value={interestRate.toFixed(1)}
                min={0}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
              />
            </div>
          </div>
          <input
            className="slider"
            type="range"
            min={0}
            max={maxInterestRate}
            step={0.1}
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
          />
        </div>

        {/* Number of Months Slider */}

        <div
          className="w-full md:w-[50%] gap-2"
          style={{
            margin: "14px auto",
          }}
        >
          <div className="flex justify-between flex-row">
            <span
              style={{
                color: "orangered",
                textAlign: "center",
                fontSize: "12px",
              }}
            >
              {months} months
              <br />
              (Loan Tenure)
            </span>

            <div className="stylediv">
              <input
                type="text"
                style={{ outline: "none", width: "100%" }}
                value={months}
                min={1}
                onChange={(e) => setMonths(parseInt(e.target.value))}
              />
            </div>
          </div>
          <input
            className="slider"
            type="range"
            min={1}
            max={maxMonths}
            step={1}
            value={months}
            onChange={(e) => setMonths(parseInt(e.target.value))}
          />
        </div>

        <div className="container2  flex justify-between flex-col">
          <div
            className="flex justify-between  "
            style={{
              padding: "20PX 10PX",
            }}
          >
            <p>Ex-Showroom Price:</p>
            <p>&#8377;{data?.price} </p>
          </div>
          <hr />
          <div
            className="flex justify-between "
            style={{
              padding: "20PX 10PX",
            }}
          >
            <p>Total Loan Amount: </p>
            <p>&#8377;{TotalLoanAmt}</p>
          </div>
          <hr />

          <div
            className="flex justify-between flex-row"
            style={{
              padding: "20PX 10PX",
            }}
          >
            <h2>Payable Amount: </h2>
            <p>&#8377;{Math.round(payable)}</p>
          </div>
          <hr />
          <div
            className="flex justify-between flex-row"
            style={{
              padding: "20PX 10PX",
            }}
          >
            <h2>You will pay Extra</h2>
            <p> {Math.round(extrapay)}</p>
          </div>
          <hr />
          <div
            className="flex justify-center items-center "
            style={{
              padding: "20PX 10PX",
            }}
          >
            <p>
              {" "}
              <h2
                className="text-[30px] p-[10px] font-bold"
                style={{
                  borderRight: "2px solid black",
                }}
              >
                EMI:
                <br />
                <span
                  className="text-[12px] relative top-[-12px] "
                  style={{
                    fontSize: "12px",
                    position: "relative",
                    top: "-12px",
                  }}
                >
                  Per Month
                </span>
              </h2>
            </p>
            <p style={{ fontSize: "50px", padding: "10px" }}>
              &#8377;{calculateEMI()}
            </p>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Cart;
