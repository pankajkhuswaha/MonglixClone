/* eslint-disable react/prop-types */
// import React from 'react';
import { Helmet } from "react-helmet";
import { FaProductHunt, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

const DashboardCard = ({ txt, icon, length }) => (
  <div className="flex items-center justify-between w-[60] p-3 mb-2 bg-white rounded shadow">
    <div>
      <div className="text-lg text-gray-700 text-bold">{txt}</div>
      <div className="flex items-center pt-1">
        <div className="text-xl font-medium text-blue-500 ">{length}</div>
      </div>
    </div>
    <div className="flex items-center justify-between p-2 bg-blue-500 text-white rounded-full">
      {icon}
    </div>
  </div>
);

const Dashboard = () => {
  const admin = useSelector((st) => st.admin.data);

  const cards = [
    {
      txt: "Users",
      icon: <FaUser />,
      length: admin?.users?.length,
    },
    {
      txt: "Users",
      icon: <FaProductHunt />,
      length: admin?.products?.length,
    },
    {
      txt: "Contact us",
      icon: <FaUser />,
      length: admin?.contacts?.length,
    },
    {
      txt: "Bulk Request",
      icon: <FaUser />,
      length: admin?.bulks?.length,
    },
  ];
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
        <meta name="theme-color" content="#0d6efd" />
      </Helmet>
      {/* <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <DashboardCard key={index} {...card} />
        ))}
      </div> */}
    </div>
  );
};

export default Dashboard;
