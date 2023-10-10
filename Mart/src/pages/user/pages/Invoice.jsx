import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { invoiceApi } from "../../../features/orderSlice";
import parse from "html-react-parser";

const Invoice = () => {
    const dispatch = useDispatch();
    const data = useSelector((st) => st.userorder.invoice);
    console.log(data);
    useEffect(() => {
      dispatch(invoiceApi());
    }, []);

  return (
    <>
      <p className="text-blueGray-700 text-xl font-bold">Invoice</p>

      <div className='w-40'> 
        {data.map((ele) => {
          return <p>{parse(ele.invoice)}</p>;
        })}
      </div>
    </>
  );
}

export default Invoice