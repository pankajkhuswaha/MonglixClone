import React from "react";
import { useSelector } from "react-redux";

const Buttonele = ({ title }) => {
  const site = useSelector((st) => st.site.data);

  return (
    <div>
      <button style={{background:site.primarybg}} className="p-2 pl-6 pr-6 rounded-lg text-white ">
        {title}
      </button>
    </div>
  );
};

export default Buttonele;
