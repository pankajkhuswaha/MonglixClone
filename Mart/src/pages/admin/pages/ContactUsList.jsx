import DataTable from "../components/DataTable";
// import axios from "axios";
// import { base_url } from "../../../utils/baseUrl";
// import { config } from "../../../utils/axiosConfig";
import { useSelector } from "react-redux";
import { FaEye } from "react-icons/fa";
import useViewModal from "../components/useViewModel";
import ViewModal from "./../components/ViewModal";
import { Helmet } from "react-helmet";
const ContactUsList = () => {
  const contacts = useSelector((st) => st.admin.data?.contacts);

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
      width: 140,
      renderCell: (params) => (
        <>{`${params.row.firstName} ${params.row.lastName}`}</>
      ),
    },
    {
      headerName: "Email",
      field: "email",
      width: 240,
    },
    {
      headerName: "Mobile",
      field: "mobile",
      width: 200,
    },
    {
        headerName: "Reason",
        field: "reason",
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
        <title>E-Procure Tech || ContactUsList</title>
      </Helmet>
      <DataTable data={contacts} cols={columns} title={"Contact us request"} />
      <ViewModal show={showModal} onHide={closeModal} data={selectedData} />
    </div>
  );
};

export default ContactUsList;
