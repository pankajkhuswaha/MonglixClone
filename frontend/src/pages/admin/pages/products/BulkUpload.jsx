import { base_url } from "./../../../../utils/baseUrl";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { useMutation } from "@tanstack/react-query";
import { BarLoader } from "react-spinners";
import DataTable from "./../../components/DataTable";
import { useDispatch } from "react-redux";
import { addAProduct } from "../../../../features/ProductSlice";
import { toast } from "react-toastify";
import { useState } from "react";
const columns = [
  {
    headerName: "Sr. No",
    field: "id",
    width: 60,
  },

  {
    headerName: "Product Name",
    field: "name",
    width: 300,
  },
  {
    headerName: "Category",
    field: "category",
    width: 240,
  },
  {
    headerName: "Brand",
    field: "brand",
    width: 120,
  },
  {
    headerName: "Price",
    field: "price",
    width: 100,
  },
];
const BulkUpload = () => {
  const dispatch = useDispatch();
  const [hideTable, sethideTable] = useState(false)
  const { isPending, isSuccess, data, mutate } = useMutation({
    mutationFn: async (formData) => {
      const res = await fetch(`${base_url}product/bulk`, {
        method: "POST",
        body: formData,
      });
      return await res.json();
    },
  });

  const handleUpload = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (!file.type.includes("spreadsheet")) {
      toast.error("Invalid file type. Please select an Excel file.");
      return;
    }
    const formData = new FormData();
    formData.append("excelFile", file);
    mutate(formData);
    sethideTable(false);
  };
  if (isSuccess) {
    console.table(data.validProducts);

    // return <DataTable data={data}/>
  }
  const handleproductUpload = async (e) => {
    e.preventDefault();
    for (let i = 0; i < data.validProducts.length; i++) {
      const product = data.validProducts[i];
      await dispatch(addAProduct(product));
    }
    sethideTable(true);
  };

  return (
    <div className="p-2">
      <h1 className="h3 text-center mb-4">Upload Products in bulk using Excel file</h1>
      <div className="flex flex-col items-center gap-4 justify-center">
        <label className="custum-file-upload" htmlFor="file">
          <PiMicrosoftExcelLogoFill color="#1d6f42" fontSize={80} />
          <div className="text">
            <span>Click to upload excel </span>
          </div>
          <input
            onChange={handleUpload}
            id="file"
            type="file"
            name="excelFile"
          />
        </label>
        <p className="text-center text-blue-400">Make sure before upload your excel file that your excel is written in right format. <br />if it not fomat in correct way it will not uplaoded !!
          <br /> Here is reference excel file download it and start uploading</p>
        <a href="/bulkproduct.xlsx" download className="btn btn-primary">Download Excel</a>
        {isPending && (
          <>
            <BarLoader color="#1d6f42" width={300} />
            Processing excel
          </>
        )}
        {isSuccess && !hideTable && data.validProducts?.length > 0 && (
          <>
            <DataTable
              data={data?.validProducts}
              cols={columns}
              title={"Fetched Product's from Excel"}
            />
            <p className="text-red-600 w-full text-sm mt-2">
              ** This is fetched product from your excelsheet if any product is
              missing ,then make sure you entered right details in excel and re
              upload your excel !!
              <br />
              ** if same name product is already added then it will update the
              previous product
            </p>
            <button
              className="btn btn-outline-primary mt-3 absolute top-60 right-12"
              type="submit"
              onClick={handleproductUpload}
            >
              Upload Products
            </button>
          </>
        )}
        {data?.status == "fail" && (
          <p className="text-red-600 text-center w-full text-sm mt-2">
            {data?.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default BulkUpload;
