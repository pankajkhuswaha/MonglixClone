import React, { useEffect } from "react";
import swal from "sweetalert";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { OrderApi } from "../../../features/orderSlice";

const Success = () => { 
  const dispatch = useDispatch();
  const fail = useLocation().pathname.includes("fail");
  const navigate = useNavigate();
  useEffect(() => {
    if (fail) {
      swal(
        "Transaction Failed !",
        "Your Order Request is failed",
        "error"
      ).then(() => navigate("/users/orders"));
    } else {
      swal(
        "Transaction Succesfull !",
        "Your Order is placed Successfully ",
        "success"
      ).then(() => navigate("/users/orders"), dispatch(OrderApi()));
    }
  }, []);

  return <></>;
};

export default Success;
