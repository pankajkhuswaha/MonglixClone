/* eslint-disable react/prop-types */
// import React from 'react';
import { Helmet } from "react-helmet";
import { FaProductHunt, FaUser, FaShirtsinbulk } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ChartByMonth } from "./helper";

const DashboardCard = ({ txt, icon, data, path }) => (
  <div className="flex flex-col w-full md:w-[48%] items-center justify-between p-3 m-2 bg-white rounded shadow">
    <div className="w-full  justify-between mb-3 flex items-center">
      <div className=" flex items-center gap-2">
        <div className="text-2xl rounded-full border p-2 bg-blue-600 text-white">
          {icon}
        </div>
        <p className="h4 mb-0">
          {txt} - {data?.length}
        </p>
      </div>
      <Link to={path} className="btn btn-primary">
        view
      </Link>
    </div>
    <div className="flex items-center pt-1 w-full">
      <ChartByMonth txt={txt} rawData={data} />
    </div>
  </div>
);

const Dashboard = () => {
  const admin = useSelector((st) => st.admin.data);

  const cards = [
    {
      path: "/admin/users",
      txt: "Users",
      icon: <FiUsers />,
      data: admin?.users,
    },
    {
      path: "/admin/products",
      txt: "Products",
      icon: <FaProductHunt />,
      data: admin?.products,
    },
    {
      path: "/admin/contact",
      txt: "Contact us",
      icon: <FaUser />,
      data: admin?.contacts,
    },
    {
      path: "/admin/bulk-req",
      txt: "Bulk Request",
      icon: <FaShirtsinbulk />,
      data: admin?.bulks,
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
        {/* <meta name="theme-color" content="#0d6efd" /> */}
      </Helmet>
      <div className="flex flex-wrap justify-between">
        {cards.map((card, index) => (
          <DashboardCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
