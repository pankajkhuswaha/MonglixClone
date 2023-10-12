import { RxDashboard } from "react-icons/rx";
import { FaProductHunt, FaUser } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/website/Homepage";
import ListProducts from "./pages/products/ListProducts";
import AddProduct from "./pages/products/AddProduct";
import Userlist from "./pages/Userlist";
import ContactUsList from "./pages/ContactUsList";
import BulkList from "./pages/BulkReq";
import OrderList from "./pages/OrderList";
import AddCoupon from "./pages/coupon/AddCoupon";
import Couponlist from "./pages/coupon/CouponList";
export const routes = [
    {
      path: "/admin/dashboard",
      icon: <RxDashboard fontSize={22} color="skyblue" />,
      txt: "Dashboard",
      element:<Dashboard/>
    },
    {
      path: "/admin/users",
      icon: <FaUser fontSize={22} color="skyblue" />,
      txt: "User",
      element:<Userlist/>
    },
    {
      path: "/admin/coupon",
      icon: <FaUser fontSize={22} color="skyblue" />,
      txt: "Coupon",
      children: [
        {
          path: "/admin/coupon",
          icon: <FaProductHunt fontSize={16}  color="skyblue"/>,
          txt: "List coupon",
          element:<Couponlist/>
        },
        {
          path: "/admin/add-coupon",
          icon: <FaProductHunt fontSize={16} />,
          txt: "Add coupon",
          element:<AddCoupon/>
        },
      ],
    },
    {
      path: "/admin/order",
      icon: <FaUser fontSize={22} color="skyblue" />,
      txt: "Order",
      element:<OrderList/>
    },
    {
      path: "/admin/contact",
      icon: <FaUser fontSize={22} color="skyblue" />,
      txt: "Contact US",
      element:<ContactUsList/>
    },
    {
      path: "/admin/bulk-req",
      icon: <FaUser fontSize={22} color="skyblue" />,
      txt: "Bulk Request",
      element:<BulkList/>
    },
    {
      path: "/admin/products",
      icon: <FaProductHunt fontSize={16} color="skyblue" />,
      txt: "Products",
      children: [
        {
          path: "/admin/products",
          icon: <FaProductHunt fontSize={16}  color="skyblue"/>,
          txt: "List Products",
          element:<ListProducts/>
        },
        {
          path: "/admin/add-products",
          icon: <FaProductHunt fontSize={16} />,
          txt: "Add Products",
          element:<AddProduct/>
        },
      ],
    },
    {
      path: "/admin/cus",
      icon: <CgWebsite fontSize={22} color="skyblue"  />,
      txt: "Customize Website",
      children: [
        {
          path: "/admin/custom-homepage",
          icon: <FaProductHunt fontSize={16} />,
          txt: "Home Page",
          element:<Homepage/>
        }
      ],
    },
  ];
export const  AdminRoute = [
  {
    path: "/dashboard",
    txt: "Dashboard",
    element:<Dashboard/>
  },
]