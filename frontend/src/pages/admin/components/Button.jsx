import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Button = () => {
  const user = useSelector((st) => st.user.data);
  const atAdmin = useLocation().pathname.includes("admin");
  const rolesToCheck = ["admin", "BP", "CP", "employee", "RP"];
  let isValidUser = rolesToCheck.some((role) => user?.role?.includes(role));
  if (isValidUser) {
    return (
      <Link
        to={atAdmin ? "/" : "/admin"}
        className="fixed bottom-10 right-10 px-4 py-2 text-white rounded-lg z-[9999] bg-gradient-to-r from-blue-800 to-indigo-900"
      >
        <p className="text-white"> {atAdmin ? "Home" : "DashBoard"}</p>
      </Link>
    );
  }
};

export default Button;
