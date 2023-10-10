import DataTable from '../components/DataTable';
import { Helmet } from 'react-helmet';
import ViewModal from '../components/ViewModal';
import { FaEye } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import useViewModal from '../components/useViewModel';

const OrderList = () => {
    const orders = useSelector((st) => st.admin.data?.orders);
    console.log(orders)
    const { showModal, selectedData, openModal, closeModal } = useViewModal();
    const columns = [
      {
        headerName: "Sr. No",
        field: "id",
        width: 60,
      },
      {
        headerName: "Invoice No",
        field: "invoiceNo",
        width: 240,
      },
      {
        headerName: "Ammount in rs",
        field: "total",
        width: 100,
      },
      {
          headerName: "Product Details",
          field: "reason",
          width: 300,
          renderCell: (params) => {
            const products = params.row.products
            return (
              <div className="w-full flex flex-col gap-1 ">
                {
                  products.map((pro,i)=>{
                    return <p key={i}> <span className='text-sm mr-2'>{i+1}</span>{pro.product.name}</p>
                  })
                }
              </div>
            )
          },
        },

        {
          headerName: "Status",
          field: "status",
          width: 240,
          renderCell: ({ row }) => (
            <input type="text" className='form-control w-60' value={row.status} />
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
        {orders &&<DataTable data={[...orders].reverse()} cols={columns} title={"Contact us request"} />}
        <ViewModal show={showModal} onHide={closeModal} data={selectedData} />
      </div>
    );
}

export default OrderList;
