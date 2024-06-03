import React, { useState, useRef } from "react";
import "../pages/home/home.css";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { FaHome } from "react-icons/fa";
import { AppContext } from "../layout/contex/AppContex";

const Collapsible = () => {
  const defaultAppData = {
    sidebarVisible: true,
  };

  const [appData, setAppData] = useState(defaultAppData);
  const target = useRef(null);
  const [open, setOpen] = useState(false);
  const [label, setLabel] = useState("");

  const handleTooltipClose = () => {
    setOpen(false);
    setLabel(
      "You have not clicked this BUTTON yet. Please Click me and check the tooltip!"
    );
  };

  const handleTooltipOpen = () => {
    setOpen(true);
    setLabel("Thank you for being here!");
  };

  return (
    <div className="w-full h-full">
      <AppContext.Provider value={{ appData, setAppData }}>
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="w-full bg-gray-200 text-white h-screen px-3 py-3">
            <h2 className="text-base font-bold leading-7 text-gray-900 text-xl">
              Tooltips
            </h2>

            <div className="text-black flex justify-end mb-2">
              <FaHome className="mt-1 mr-1" />
              <h1 className="text-base font-bold leading-7 text-gray-530 ">
                {" "}
                Home / More / Tooltips
              </h1>
            </div>
            <hr className="text-black" />

            <div className="h-[50%] m-4 border-solid border-1 border-gray-600 text-white p-4 bg-gray-500 text-center ">
              <Tabs
                defaultActiveKey="Tooltip"
                id="tab-example"
                className="mb-3"
              >
                <Tab eventKey="Tooltip" title="Tooltip">
                  <Tooltip title={label} arrow>
                    <Button>
                      <ClickAwayListener onClickAway={handleTooltipClose}>
                        <div>
                          <Tooltip
                            PopperProps={{
                              disablePortal: true,
                            }}
                            onClose={handleTooltipClose}
                            open={open}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            // title={label}
                            arrow
                          >
                            <Button
                              className="bg-blue-200 text-white"
                              onClick={handleTooltipOpen}
                            >
                              Check The Tooltip Before You Click!
                            </Button>
                          </Tooltip>
                        </div>
                      </ClickAwayListener>
                    </Button>
                  </Tooltip>
                </Tab>
              </Tabs>
            </div>

            <div className="relative  my-52 mb-0 text-center bg-red-300 text-black">
              <div className="absolute inset-x-0 bottom-0  ...">
                Copyright © 2024{" "}
                <a className="text-blue-600" href="http://jalatechnologies.com">
                  {" "}
                  JALA Technologies
                </a>
                . All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </AppContext.Provider>
    </div>
  );
};

export default Collapsible;
