// import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import $ from 'jquery';
import 'datatables.net';
import { useEffect, useRef } from "react";
import { deleteProduct } from "../../../../features/ProductSlice";



const ListProducts = () => {
  const productData = useSelector((st) => st.products.products);
  console.log(productData);
  const tableRef = useRef(null);
    const dispatch = useDispatch()
  useEffect(() => {
    $(tableRef.current).DataTable();
  }, [productData]);
  return (
    <div>
      {productData.length !== 0 ? (
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
                      <td className="px-4 py-4">
                        <div className="flex justify-end gap-4">
                          <p className="text-danger" onClick={()=>dispatch(deleteProduct({_id:e._id}))}>
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
                          <a href="#">
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
                          </a>
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
      )}
    </div>
  );
};

export default ListProducts;