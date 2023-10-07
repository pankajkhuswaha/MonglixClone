import DataTable from "../components/DataTable";
// import axios from "axios";
// import { base_url } from "../../../utils/baseUrl";
// import { config } from "../../../utils/axiosConfig";
import { useSelector } from "react-redux";
import { FaEye } from "react-icons/fa";
import useViewModal from "../components/useViewModel";
import ViewModal from "./../components/ViewModal";
import { Helmet } from "react-helmet";
const BulkList = () => {
  const bulks = useSelector((st) => st.admin.data?.bulks);

  const { showModal, selectedData, openModal, closeModal } = useViewModal();
  const columns = [
    {
      headerName: "Sr. No",
      field: "id",
      width: 60,
    },
    {
      headerName: "Name",
      field: "name",
      width: 200,
    },
    {
      headerName: "Mobile",
      field: "mobile",
      width: 200,
    },
    {
      headerName: "Product",
      field: "productName",
      width: 200,
    },
    {
        headerName: "Quantity",
        field: "quantity",
        width: 200,
      },
    {
      headerName: "Action",
      field: "action",
      width: 100,
      renderCell: (params) => (
        <div className="w-full flex justify-center items-center">
          <button onClick={() => openModal(params.row)}>
            <FaEye size={20} style={{ color: "blue" }} />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <Helmet>
        <title>E-Procure Tech || BulkList</title>
      </Helmet>
      <DataTable data={bulks} cols={columns} title={"Bulk Order request"} />
      <ViewModal show={showModal} onHide={closeModal} data={selectedData} />
    </div>
  );
};

export default BulkList;
