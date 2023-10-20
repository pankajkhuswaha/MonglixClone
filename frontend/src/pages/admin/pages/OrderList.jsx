import DataTable from '../components/DataTable';
import { Helmet } from 'react-helmet';
import ViewModal from '../components/ViewModal';
import { FaEye } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import useViewModal from '../components/useViewModel';
import { toggleLoading } from '../../../features/loading/loadingSlice';
import axios from 'axios';
import { base_url } from '../../../utils/baseUrl';
import { config } from '../../../utils/axiosConfig';
import { unwrapResult } from '@reduxjs/toolkit';
import { getAdmindata } from '../../../features/admin/adminSlice';

const OrderList = () => {
    const orders = useSelector((st) => st.admin.data?.orders);
    const { showModal, selectedData, openModal, closeModal } = useViewModal();
  const dispatch = useDispatch();

  const changeUserType = async (_id, e) => {
      dispatch(toggleLoading(true));
      try {
        await axios.put(
          `${base_url}order`,
          { status: e.target.value,
          id:_id },
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
    const columns = [
      {
        headerName: "Sr. No",
        field: "id",
        width: 60,
      },
      {
        headerName: "Invoice No",
        field: "invoiceno",
        width: 240,
      },
      {
        headerName: "Order By",
        field: "orderBy",
        width: 140,
      },
      {
        headerName: "Ammount in rs",
        field: "total",
        width: 140,
      },

        {
          headerName: "Status",
          field: "status",
          width: 240,
          renderCell: ({ row }) => (
            <select name="" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            value={row?.status}
            onChange={(e) => changeUserType(row.invoiceno, e)}  id=""><option value="Not Processed">Not Processed</option><option value="Cash On Delivery">Cash On Delivery</option><option value="Processing" selected="">Processing</option><option value="Dispatched">Dispatched</option><option value="Cancelled">Cancelled</option><option value="return">return</option><option value="return sucessfully">return sucessfully</option><option value="Order Confirmed">Order Confirmed</option><option value="Shipped">Shipped</option><option value="Out For Delivery">Out For Delivery</option></select>
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
          <title>E-Procure Tech || ContactUsList</title>
        </Helmet>
        {<DataTable data={orders} cols={columns} title={"Contact us request"} />}
        <ViewModal show={showModal} onHide={closeModal} data={selectedData} />
      </div>
    );
}

export default OrderList;
