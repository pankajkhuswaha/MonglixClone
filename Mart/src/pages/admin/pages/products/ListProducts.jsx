/* eslint-disable react/prop-types */
// import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";
import "datatables.net";
import { useEffect, useRef } from "react";
import { deleteProduct, getProducts } from "../../../../features/ProductSlice";
import { Link } from "react-router-dom";
import DataTable from "../../components/DataTable";
import ViewModal from "../../components/ViewModal";
import { Helmet } from "react-helmet";
import useViewModal from "../../components/useViewModel";
import { FaEye } from "react-icons/fa";
import swal from "sweetalert"
import { unwrapResult } from "@reduxjs/toolkit";


const EditButtons = ({ data, openModal }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center w-full gap-4">
      <button onClick={() => openModal(data)}>
        <FaEye size={20} style={{ color: "blue" }} />
      </button>
      <p
        className="text-danger cursor-pointer"
        onClick={() => {swal({
          title: "Are you sure?",
          text: "Are you sure that you want delete this product?",
          icon: "warning",
          dangerMode: true,
        })
        .then(willDelete => {
          if (willDelete) {
            dispatch(deleteProduct(data._id)).then(unwrapResult).then(swal("Deleted!", "Your product has been deleted!", "success"))
            ;
          }
        });
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </p>
      <Link
        to={`/admin/update-products/${data._id}`}
        state={data}
        className="text-primary cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
        </svg>
      </Link>
    </div>
  );
};

const ListProducts = () => {
  const productData = useSelector((st) => st.products.products);
  const tableRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    $(tableRef.current).DataTable();
  }, [productData]);

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const { showModal, selectedData, openModal, closeModal } = useViewModal();
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
    {
      headerName: "Action",
      field: "action",
      width: 140,
      renderCell: (params) => (
        <EditButtons data={params.row} openModal={openModal} />
      ),
    },
  ];

  return (
    <div>
      <Helmet>
        <title>E-Procure Tech || Userlist</title>
      </Helmet>
      <DataTable data={productData} cols={columns} title={"Product List"} />
      <ViewModal show={showModal} onHide={closeModal} data={selectedData} />
      {/* {productData.length !== 0 ? (
        <div className=" overflow-x-auto  mt-4">
          <table ref={tableRef} className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 py-2 font-medium text-gray-900">
                  Product Name
                </th>
                <th scope="col" className="px-4 py-2 font-medium text-gray-900">
                  Category
                </th>
                <th scope="col" className="px-4 py-2 font-medium text-gray-900">
                  Price
                </th>
                <th scope="col" className="px-4 py-2 font-medium text-gray-900">
                  Brand
                </th>
                <th scope="col" className="px-4 py-4 font-medium text-gray-900">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {productData &&
                productData.map((e, i) => {
                  return (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-4 py-4">{e.name.slice(0, 30)}...</td>
                      <td className="px-4 py-4">{e.category}</td>
                      <td className="px-4 py-4">{e.price}</td>
                      <td className="px-4 py-4">{e.brand}</td>
                      <td className="px-4 py-4 flex">
                        <div className="flex justify-center gap-4">
                          
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      ) : (
        "Please Wait Product is Loading"
      )} */}
    </div>
  );
};

export default ListProducts;
