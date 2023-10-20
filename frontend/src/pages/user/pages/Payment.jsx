import React from 'react'
import Buttonele from '../../../components/button/Buttonele';

const Payment = () => {
  return (
    <>
      <p className="text-blueGray-700 text-xl font-bold">My Payment</p>
      <br />
      <div className="w-[20%] float-right ml-auto pt-3 ">
        <Buttonele title={"Download Statement"} />
      </div>

      <br />
      <p className="text-blueGray-700 text-md font-[500]">
        Total Invoices: ₹ 0
        <br />
        Total Payment: ₹ 0 <br /> Balance: ₹ 0
      </p>
    </>
  );
}

export default Payment