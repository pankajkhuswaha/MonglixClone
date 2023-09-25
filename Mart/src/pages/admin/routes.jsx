import { RxDashboard } from "react-icons/rx";
import { FaProductHunt } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/website/Homepage";
import ListProducts from "./pages/products/ListProducts";
import AddProduct from "./pages/products/AddProduct";
export const routes = [
    {
      path: "/admin/dashboard",
      icon: <RxDashboard fontSize={22} color="skyblue" />,
      txt: "Dashboard",
      element:<Dashboard/>
    },
    {
      path: "/admin/products",
      icon: <FaProductHunt fontSize={16} />,
      txt: "Products",
      children: [
        {
          path: "/admin/products",
          icon: <FaProductHunt fontSize={16} />,
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
    // {
    //   path: "/admin/cus",
    //   icon: <CgWebsite fontSize={22} color="skyblue"  />,
    //   txt: "Customize Website",
    //   children: [
    //     {
    //       path: "/admin/custom-homepage",
    //       icon: <FaProductHunt fontSize={16} />,
    //       txt: "Home Page",
    //       element:<Homepage/>
    //     }
    //   ],
    // },
  ];
export const  AdminRoute = [
  {
    path: "/dashboard",
    txt: "Dashboard",
    element:<Dashboard/>
  },
]