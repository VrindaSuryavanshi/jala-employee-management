import React, { useState } from "react";
import "../pages/home/home.css";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FaHome } from "react-icons/fa";

import { AppContext } from "../layout/contex/AppContex";
import MultiValue from "../multivalue/MultiValue";

const AutoComplete = () => {
  const defaultAppData = {
    sidebarVisible: true,
  };
  const [appData, setAppData] = useState(defaultAppData);

  return (
    <div className="w-full h-full overflow-hidden">
      <AppContext.Provider value={{ appData, setAppData }}>
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="w-full bg-gray-200 text-white h-screen px-3 py-3">
            <h2 className="text-base font-bold leading-7 text-gray-900 text-xl">
              Autocomplete
            </h2>

            <div className="text-black flex justify-end mb-2">
              <FaHome className="mt-1 mr-1" />
              <h1 className="text-base font-bold leading-7 text-gray-530 ">
                {" "}
                Home / More / Autocomplete{" "}
              </h1>
            </div>
            <hr className="text-black" />
            <div className="h-[50%] m-4 border-solid border-1 border-gray-600 text-white p-4 bg-gray-900">
              <Tabs
                defaultActiveKey="Single Value"
                id="tab-example"
                className="mb-3"
              >
                <Tab eventKey="Single Value" title="Single Value">
                  <input
                    className="form-control w-[50%] my-10 bg-gray-200"
                    type="text"
                    list="datalistOptions"
                    id="exampleDataList"
                    placeholder="Type to search..."
                    multiple
                  />
                  <datalist id="datalistOptions" className="bg-gray-200">
                    <option value="ActionScript" className="bg-white" />
                    <option value="AppleScript" />
                    <option value="Asp" />
                    <option value="Basics" />
                    <option value="Erlang" />
                    <option value="Fortrang" />
                    <option value="Java" />
                    <option value="Erlang" />
                    <option value="C" />
                    <option value="C++" />
                    <option value="JavaScript" />
                    <option value="clojure" />
                    <option value="CloudFusion" />
                    <option value="Perl" />
                    <option value="PHP" />
                    <option value="python" />
                  </datalist>
                </Tab>

                <Tab eventKey="Multiple Value" title="Multiple Value">
                  <div className="text-black">
                    <MultiValue />
                  </div>
                </Tab>
              </Tabs>
            </div>
            <div className="relative h-52 text-center text-black">
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

export default AutoComplete;
