/* eslint-disable react/prop-types */
// import React from 'react';
import { Helmet } from "react-helmet";
import { FaProductHunt, FaUser, FaShirtsinbulk } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ChartByMonth } from "./helper";

const DashboardCard = ({ txt, icon, data, path }) => (
  <Link
    to={path}
    className="flex w-full md:w-[48%] items-center justify-between p-3 m-2 bg-white rounded shadow"
  >
      <div className="flex items-center pt-1 w-full">
        <ChartByMonth rawData={data}  />
      </div>
  </Link>
);

const Dashboard = () => {
  const admin = useSelector((st) => st.admin.data);

  const cards = [
    {
      path: "/admin/users",
      txt: "Users",
      icon: <FiUsers fontSize={40} />,
      data: admin?.users,
    },
    {
      path: "/admin/products",
      txt: "Products",
      icon: <FaProductHunt fontSize={40} />,
      data: admin?.products,
    },
    {
      path: "/admin/contact",
      txt: "Contact us",
      icon: <FaUser fontSize={40} />,
      data: admin?.contacts,
    },
    {
      path: "/admin/bulk-req",
      txt: "Bulk Request",
      icon: <FaShirtsinbulk fontSize={40} />,
      data: admin?.bulks,
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
        {/* <meta name="theme-color" content="#0d6efd" /> */}
      </Helmet>
      <div className="flex flex-wrap">
        {cards.map((card, index) => (
          <DashboardCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
