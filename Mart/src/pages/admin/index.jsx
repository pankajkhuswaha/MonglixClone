import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./index.css";
import Dashboard from "./pages/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { base_url } from "../../utils/baseUrl";
import axios from "axios";
import { toast } from "react-toastify";
import Sidebar from "./components/Sidebar";
import { config } from "../../utils/axiosConfig";
import { routes } from "./routes";
import { getAdmindata } from "../../features/admin/adminSlice";
import AddProduct from "./pages/products/AddProduct";

const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const sidetoggle =
    "col-12 fixed col-md-2 bg-white h-full shadow transition-all w-[3.3rem] z-[9] top-[50px] delay-600 -left-[105vw]";
  const sidenottoggle =
    "col-12 fixed col-md-2 bg-white h-full shadow transition-all delay-600 z-[99] top-[50px] left-0";

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAdmin, setadmin] = useState(false);
  const site = useSelector((st) => st.site.data);

  const checkAdmin = async () => {
    try {
      const res = await axios.get(`${base_url}user/isadmin`, config);
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
    dispatch(getAdmindata())
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
    toast.success("logout Successfull");
  };

  if (isAdmin) {
    return (
      <div className="admin">
        <nav className="transition-all flex h-14 w-full m-h-[100vw] bg-white z-[999] items-center fixed right-0 border shadow-sm top-0 gap-4 justify-between px-4">
          <div className="flex gap-2  items-center">
            <AiOutlineMenu
              onClick={toggleSidebar}
              className="cursor-pointer"
              fontSize={30}
            />
            <Link
              to={"/"}
              style={{ color: site.primarybg }}
              className="text-[20px] font-bold text-start pl-3 py-2 text-nowrap"
            >
              {site.name}
            </Link>
          </div>
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              handleLogout();
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
                ? "col-2 flex justify-between pt-4"
                : "col-0 d-none border justify-between pt-4"
            }
          ></div>
          <div
            className={
              isSidebarOpen
                ? "col-10 flex justify-between pt-4"
                : "col-12 flex justify-between pt-4"
            }
          >
            <div className="mt-[20px] w-full min-h-[84vh]">
              <Routes>
                <Route path="*" element={<Dashboard />} />
                {routes.map((route, i) => {
                  return (
                    <React.Fragment key={i}>
                      {!route.children && (
                        <Route
                          path={route.path?.split("admin")[1]}
                          element={route.element}
                        />
                      )}
                      {route.children && (
                        <>
                          {route.children.map((rut) => (
                            <Route
                              key={i}
                              path={rut.path?.split("admin")[1]}
                              element={rut.element}
                            />
                          ))}
                        </>
                      )}
                    </React.Fragment>
                  );
                })}
                <Route path="/update-products/:id" element={<AddProduct />} />
                {/* <Route path="/custom-homepage" element={<Homepage />} />
                <Route path="/products" element={<ListProducts />} />
                <Route path="/add-products" element={<AddProduct />} />
                <Route path="/" element={<Dashboard />} /> */}
              </Routes>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Admin;
