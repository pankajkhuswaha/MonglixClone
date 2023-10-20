import React from "react";
import { useSelector } from "react-redux";

const Buttonele = ({ title, onClick, disabled,width }) => {
  const site = useSelector((st) => st.site.data);

  return (
    <div style={{width:{width}}}>
      <button
        style={{ background: site.primarybg }}
        className="p-2 w-full md:pl-6 md:pr-6 rounded-lg text-white"
        onClick={onClick}
        disabled={disabled}
      >
        {title}
      </button>
    </div>
  );
};

export default Buttonele;
