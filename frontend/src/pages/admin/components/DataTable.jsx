/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

export default function DataTable({ data, cols,title }) {
  if (data?.length > 0) {
    let datas = data?.map((obj) => ({ ...obj }));
    for (let i = 0; i < datas?.length; i++) {
      datas[i]["id"] = i + 1;
    }
    const [searchTerm, setSearchTerm] = useState("");
    const filteredData = data.filter((obj) => {
      return Object.values(obj).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    datas = filteredData.map((obj, index) => ({ ...obj, id: index + 1 }));

    return (
      <div className="flex flex-col items-center justify-center shadow">
        <div className="w-full flex justify-between items-center p-2 my-2">
          <h1 className="font-semibold h5">{title ? title : "Datatable"}</h1>
          <div>
            <input
              type="search"
              className="form-control"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        {filteredData.length === 0 ? (
          <div className="p-4">No search Result found.</div>
        ) : (
          <div style={{ width: "100%", border: "none" }}>
            <DataGrid
              rows={datas}
              columns={cols}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              options={{
                autoWidth: true,
              }}
              pageSizeOptions={[10, 20, 50, 100]}
            />
          </div>
        )}
      </div>
    );
  }
}
