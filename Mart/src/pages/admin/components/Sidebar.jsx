// import React from 'react';
import {  NavLink, useLocation } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import { routes } from "../routes";

const Sidebar = () => {
  const path = useLocation().pathname;    
  return (
    <div
      id="adminNav"
      className="sidebar min-h-screen overflow-hidden border-r  hover:bg-white hover:shadow-lg"
    >
      <div className="flex h-screen flex-col gap-[2px] pt-2 pb-6">
       
        {routes.map((itm, i) => (
          <div className=" cursor-pointer" key={i}>
            {itm.children ? (
              <Accordion
                className="sidebar-acc text-md flex items-center gap-2 w-full"
                defaultActiveKey="0"
              >
                <Accordion.Item className="w-full border-none" eventKey="1">
                  <Accordion.Header className="w-full">
                  <div className="-ml-2 h-6 w-6">{itm.icon}</div>
                <span className="-mr-1 font-medium mb-1 cursor-pointer">
                  {itm.txt}
                </span>
                  </Accordion.Header>
                  <Accordion.Body className="p-0">
                    {itm?.children.map((childRoute, j) => (
                      <NavLink key={j} to={childRoute.path} className="navlink">
                        <div className="-ml-1 h-6 w-6">{itm.icon}</div>
                        <span className="-mr-1 font-medium cursor-pointer">
                          {childRoute.txt}
                        </span>
                      </NavLink>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ) : (
              <NavLink to={itm.children ? path : itm.path} className="navlink">
                <div className="-ml-1 h-6 w-6">{itm.icon}</div>
                <span className="-mr-1 font-medium cursor-pointer">
                  {itm.txt}
                </span>
              </NavLink>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
