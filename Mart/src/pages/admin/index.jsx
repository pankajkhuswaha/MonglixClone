import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import { useDispatch } from "react-redux";
import { base_url } from "../../utils/baseUrl";
import axios from "axios";
import { toast } from "react-toastify";
import Sidebar from "./components/Sidebar";
import Homepage from "./pages/website/Homepage";
import ListProducts from "./pages/products/ListProducts";
import AddProduct from "./pages/products/AddProduct";
import "datatables.net-dt/css/jquery.dataTables.css";

const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const sidetoggle =
    "col-12 fixed col-md-2 bg-white h-full shadow transition-all w-[3.3rem] z-[9] top-0 delay-600 -left-[105vw]";
  const sidenottoggle =
    "col-12 fixed col-md-2 bg-white h-full shadow transition-all delay-600 z-[99] top-0 left-0";

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAdmin, setadmin] = useState(true);

  const checkAdmin = async () => {
    const email = JSON.parse(localStorage.getItem("user"))?.email || null;
    try {
      const res = await axios.post(`${base_url}user/isadmin`, { email });
      setadmin(res.data.admin);
    } catch (error) {
      setadmin(false);
      navigate("/login");
      toast.warn("You are not admin");
      console.error(error.message);
    }
  };

  useEffect(() => {
    checkAdmin();
  }, [dispatch]);

  if (isAdmin) {
    return (
      <div className=" relative">
        <nav
          style={isSidebarOpen ? { width: "83.33%" } : { width: "100%" }}
          className="transition-all flex h-14 bg-white z-[999] items-center fixed right-0 border shadow-sm top-0 gap-4 justify-between px-4"
        >
          <div className="flex gap-2  items-center">
            <AiOutlineMenu
              onClick={toggleSidebar}
              className="cursor-pointer"
              fontSize={30}
            />
            <Link to={"/"}>
              {/* <img src={logo} alt="" className="w-24 ml-4" /> */}
            </Link>
          </div>
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              //   dispatch(logout());
              navigate("/login");
            }}
          >
            Logout
          </button>
        </nav>
        {/* nav ends here */}

        <div className={isSidebarOpen ? sidenottoggle : sidetoggle}>
          <Sidebar />
        </div>

        {/* sidebar end herer */}
        <div className="col-12 flex ">
          <div
            className={
              isSidebarOpen
                ? "col-2 flex justify-between p-4"
                : "col-0 d-none border justify-between p-4"
            }
          ></div>
          <div
            className={
              isSidebarOpen
                ? "col-10 flex justify-between p-4"
                : "col-12 flex justify-between p-4"
            }
          >
            <div className="mt-[20px] w-full">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/custom-homepage" element={<Homepage />} />
                <Route path="/products" element={<ListProducts />} />
                <Route path="/add-products" element={<AddProduct />} />
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Admin;
