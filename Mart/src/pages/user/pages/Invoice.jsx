import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { invoiceApi } from "../../../features/orderSlice";
import parse from "html-react-parser";

const Invoice = () => {
  const dispatch = useDispatch();
  const data = useSelector((st) => st.userorder.invoice);
  const [displayInvoice, setDisplayInvoice] = useState(null);

  useEffect(() => {
    dispatch(invoiceApi());
  }, [dispatch]);

  const handleClick = (invoice) => {
    setDisplayInvoice(invoice);
  };

  const handlePrint = () => {
    const invoiceContent = document.getElementById("invoice-content");

    if (invoiceContent) {
      const popupWin = window.open("", "_blank");
      popupWin.document.open();
      popupWin.document.write(
        `${invoiceContent.innerHTML}`
      );
      popupWin.document.close();
      popupWin.print();
      popupWin.close();
    }
  };

  return (
    <>
      <p className="text-blueGray-700 text-xl font-bold">Invoice</p>

      <div className="w-full">
        {data.map((ele, index) => (
          <div className="border mt-3 p-2 rounded-md" key={index}>
            <div className="flex justify-between items-center">
              <p className="text-md text-gray-800 font-semibold">
                Invoice No:{" "}
                <span className="font-bold pl-2 text-gray-700">
                  {" "}
                  {ele.invoiceNo}
                </span>{" "}
              </p>

              <button
                className="bg-[#3D9BFF] block sm:hidden mt-3 text-white p-2 rounded-md"
                onClick={handlePrint}
              >
                Print Invoice
              </button>

              <button
                className="bg-[#3D9BFF] hidden sm:block text-white p-2 rounded-md"
                onClick={() => handleClick(ele.invoice)}
              >
                Show Invoice
              </button>
            </div>
            {displayInvoice === ele.invoice && (
              <div className="m-4" id="invoice-content">
                {parse(ele.invoice)}
                <button
                  className="bg-[#3D9BFF] mt-3 text-white p-2 rounded-md"
                  onClick={handlePrint}
                >
                  Print Invoice
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Invoice;

