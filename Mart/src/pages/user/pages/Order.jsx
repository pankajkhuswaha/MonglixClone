import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { OrderApi } from "../../../features/orderSlice";
const Order = () => {
  const dispatch = useDispatch();
  const data = useSelector((st) => st.userorder.orders);
  useEffect(() => {
    dispatch(OrderApi());
  }, []);


  return (
    <>

      <p className="text-blueGray-700 text-xl font-bold">My Orders</p>
      <br />
      <div>
        {[...data].reverse().map((ele, id) => {
          const { products } = ele;
          return (
            <div className="border shadow-sm rounded-md p-3 mt-3 " key={id}>
              <div className="">
                <div className="flex justify-between items-center p-2">
                  <div>
                    <p className="text-xl font-semibold">
                      Transaction ID: {ele.transactionId}{" "}
                    </p>
                    <p className="mt-2 text-green-400">status: {ele.status}</p>
                  </div>

                  <div className="text-lg text-gray-900 font-semibold">
                    Total Rs:{ele.total}
                  </div>
                </div>
                <hr className="mt-2 mb-4" />
              </div>
              {products.map((ele, index) => (
                <div
                  className="flex justify-between items-center p-2"
                  key={index}
                >
                  <div className="flex gap-2 items-center ">
                    <div className=" rounded-lg  border flex justify-center items-center p-2 bg-gray-100 w-24 h-20">
                      <img
                        style={{ mixBlendMode: "darken" }}
                        src={ele?.image}
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-700">
                        {ele.name}
                      </p>
                      <p className="text-md text-gray-500 font-semibold">
                        Qty:{ele.count}
                      </p>
                    </div>
                  </div>

                  <div className="text-lg text-gray-900 font-semibold">
                    <p>Rs:{ele.total}</p>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Order;
