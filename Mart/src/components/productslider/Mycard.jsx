import React, { useState } from "react";
import Loader from "./loader/Loader";
import "./Mycard.css";
const Mycard = (props) => {
  const [load, setLoad] = useState(true);
  return (
    <div className="mycard">
      {load ? (
        <img
          src="	https://i.ibb.co/KqdgGY4/cosmetic-packaging-mockup-1150-40280.webp"
          alt=""
        />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Mycard;
