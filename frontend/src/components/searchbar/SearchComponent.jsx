/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import { AllFilterApi } from "../../features/ProductSlice";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { unwrapResult } from "@reduxjs/toolkit";

const SearchComponent = ({ closeDrawer }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const site = useSelector((st) => st.site.data);
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values) => {
   
      const value = values.search;
      const type = "search";
      dispatch(AllFilterApi({ type, value }))
        .then(unwrapResult)
        .then(() => {
       
          navigate("/product");

          closeDrawer();
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex items-center max-w-md bg-white  md:rounded-lg border border-gray-200">
        <div className="w-full lg:w-[800px]">
          <input
            type="search"
            name="search"
            className="w-full px-4 text-gray-800 rounded-full focus:outline-none"
            placeholder="Search Product, Category, Brand.."
            value={formik.values.search}
            onChange={(e) => {
              formik.handleChange(e);
            }}
          />
        </div>
        <div>
          <button
            type="submit"
            className={`flex items-center justify-center w-12 h-12 text-white md:rounded-r-lg`}
            style={{ background: site.primarybg }}
            disabled={formik.values.search.length === 0}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchComponent;
