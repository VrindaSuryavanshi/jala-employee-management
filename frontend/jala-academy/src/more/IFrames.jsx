import React, { useState } from "react";
import "../pages/home/home.css";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FaHome } from "react-icons/fa";

import { AppContext } from "../layout/contex/AppContex";

const IFrames = () => {
  const defaultAppData = {
    sidebarVisible: true,
  };
  const [appData, setAppData] = useState(defaultAppData);

  return (
    <div className="w-full h-full overscroll-none">
      <AppContext.Provider value={{ appData, setAppData }}>
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="w-full bg-gray-200 text-white h-fit px-3 py-3">
            <h2 className="text-base font-bold leading-7 text-gray-900 text-xl">
              IFrames
            </h2>

            <div className="text-black flex justify-end mb-2">
              <FaHome className="mt-1 mr-1" />
              <h1 className="text-base font-bold leading-7 text-gray-530 ">
                {" "}
                Home / More / IFrames{" "}
              </h1>
            </div>
            <hr className="text-black" />
            <div className=" h-screen m-4 border-solid border-1 border-gray-400 text-white p-4 bg-gray-900 overflow-auto">
              <Tabs
                defaultActiveKey="iframes"
                id="tab-example"
                className="mb-3 "
              >
                <Tab eventKey="iframes" title="iframes">
                  <div className="flex flex-column  gap-4 p-20">
                    <div className="bg-gray-300">
                      <h6 className="text-black text-bold p-4">IFrame 1</h6>
                      <br />
                      <iframe
                        width="700"
                        height="315"
                        src=""
                        title="iframe"
                      ></iframe>
                    </div>

                    <div className="bg-gray-300">
                      <h1 className="text-black text-bold p-2">IFrame 2</h1>
                      <br />
                      <iframe
                        width="100%"
                        height="315"
                        src="http://localhost:3000/"
                        title="GeeksforGeeks"
                      ></iframe>
                    </div>

                    <div className="bg-gray-300">
                      <h1 className="text-black text-bold p-4">IFrame 3</h1>
                      <br />
                      <iframe
                        width="800"
                        height="315"
                        src=""
                        title="iframe"
                      ></iframe>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </AppContext.Provider>
    </div>
  );
};

export default IFrames;
