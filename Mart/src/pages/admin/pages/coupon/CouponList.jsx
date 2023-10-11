import DataTable from "../../components/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineDeleteOutline } from "react-icons/md";
import useViewModal from "../../components/useViewModel";
import ViewModal from "../../components/ViewModal";
import { Helmet } from "react-helmet";
import swal from "sweetalert"
import { delCoupon } from "../../../../features/admin/adminSlice";
import { unwrapResult } from "@reduxjs/toolkit";
const Couponlist = () => {
  const codes = useSelector((st) => st.admin.data?.codes);
  const dispatch = useDispatch();

  const { showModal, selectedData, openModal, closeModal } = useViewModal();
  const columns = [
    {
      headerName: "Sr. No",
      field: "id",
      width: 100,
    },
    {
      headerName: "Coupon Codes",
      field: "code",
      width: 180,
    },
    {
      headerName: "Coupon types",
      field: "type",
      width: 200,
    },
    {
      headerName: "Discounted value",
      field: "discountValue",
      width: 200,
    },
    {
      headerName: "Action",
      field: "action",
      width: 100,
      renderCell: (params) => (
        <div className="w-full flex justify-center items-center">
          <button onClick={() => {
            swal({
                title: "Are you sure?",
                text: "Are you sure that you want delete this coupon?",
                icon: "warning",
                dangerMode: true,
              })
              .then(willDelete => {
                if (willDelete) {
                    dispatch(delCoupon(params.row._id)).then(unwrapResult).then(swal("Deleted!", "Your coupon has been deleted!", "success"))
                }
              });
              
          }}>
            <MdOutlineDeleteOutline size={30} style={{ color: "red" }} />
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
      <DataTable data={codes} cols={columns} title={"User List"} />
      <ViewModal show={showModal} onHide={closeModal} data={selectedData} />
    </div>
  );
};

export default Couponlist;
