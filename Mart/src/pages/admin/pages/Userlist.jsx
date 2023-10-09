import DataTable from "../components/DataTable";
import axios from "axios";
import { base_url } from "../../../utils/baseUrl";
import { config } from "../../../utils/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { FaEye } from "react-icons/fa";
import useViewModal from "../components/useViewModel";
import ViewModal from "./../components/ViewModal";
import { Helmet } from "react-helmet";
import { getAdmindata } from "../../../features/admin/adminSlice";
import { toggleLoading } from "../../../features/loading/loadingSlice";
import { unwrapResult } from "@reduxjs/toolkit";
const Userlist = () => {
  const users = useSelector((st) => st.admin.data?.users);
  const dispatch = useDispatch();
  const changeUserType = async (_id, e) => {
    dispatch(toggleLoading(true));
    try {
      await axios.put(
        `${base_url}user/edit-role/${_id}`,
        { role: e.target.value },
        config
      );
      dispatch(getAdmindata())
        .then(unwrapResult)
        .then(() => {
          dispatch(toggleLoading(false));
        });
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
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
      headerName: "Role",
      field: "role",
      width: 200,
      renderCell: ({ row }) => (
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          value={row?.role}
          onChange={(e) => changeUserType(row._id, e)}
        >
          <option value="user">User</option>
          <option value="silver">Silver</option>
          <option value="gold">Gold</option>
          <option value="platinum">Platinum</option>
          <option value="admin">Admin</option>
        </select>
      ),
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
        <title>E-Procure Tech || Userlist</title>
      </Helmet>
      <DataTable data={users} cols={columns} title={"User List"} />
      <ViewModal show={showModal} onHide={closeModal} data={selectedData} />
    </div>
  );
};

export default Userlist;
