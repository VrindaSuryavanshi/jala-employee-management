import React, { useState, useRef } from "react";
import "../pages/home/home.css";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FaHome } from "react-icons/fa";
import { AppContext } from "../layout/contex/AppContex";
import PopupBox from "./PopupBox";

const Popups = () => {
  const defaultAppData = {
    sidebarVisible: true,
  };

  const [appData, setAppData] = useState(defaultAppData);
  const target = useRef(null);
  const [promptMsg, setPromptMsg] = useState("");
  const [buttonPopup, setButtonPopup] = useState(false);

  const handleDuplicateTab = () => {
    window.open(window.location.href);
  };

  const handleAlert = () => {
    alert("Alert Box...!");
  };
  const handleConfirm = () => {
    window.confirm("Confirm Message Box! Confirm This?");
  };
  const handlePrompt = () => {
    //console.log(promptMsg)

    let text;
    let emp = prompt(
      "Please enter your name:",
      "JALA Academy- A Place to find your Dream Job"
    );
    if (emp == null || emp == "") {
      text = "You cancelled the prompt.";
    } else {
      text = emp;
    }
    setPromptMsg(text);
  };
  return (
    <div className="w-full h-full">
      <AppContext.Provider value={{ appData, setAppData }}>
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="w-full bg-gray-200 text-white h-screen px-3 py-3">
            <h2 className="text-base font-bold leading-7 text-gray-900 text-xl">
              Popups
            </h2>

            <div className="text-black flex justify-end mb-2">
              <FaHome className="mt-1 mr-1" />
              <h1 className="text-base font-bold leading-7 text-gray-530 ">
                {" "}
                Home / More / Popups
              </h1>
            </div>
            <hr className="text-black" />

            <div className="h-[50%] m-4 border-solid border-1 border-gray-600 text-white p-4 bg-gray-900 text-center py-2 ">
              <Tabs defaultActiveKey="Popups" id="tab-example" className="mb-3">
                <Tab eventKey="Popups" title="Popups">
                  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 text-black">
                    <a
                      className="text-black text-decoration-none"
                      href="javascript:window.open('https://www.google.com/','_blank' ,'height=500,width=300','margin-20');"
                    >
                      <div className="border p-2 bg-blue-400 rounded-sm">
                        Popup One
                      </div>
                    </a>
                    <a
                      className="text-black text-decoration-none"
                      href="javascript:window.open('https://www.tutorialspoint.com/index.htm','_blank','height=500,width=300');"
                    >
                      <div className="border p-2 bg-blue-400 rounded-sm">
                        Popup Two
                      </div>
                    </a>
                    <a
                      className="text-black text-decoration-none"
                      href="javascript:window.open('https://www.tutorialsteacher.com/','_blank','height=500,width=300');"
                    >
                      <div className="border p-2 bg-blue-400 rounded-sm">
                        Popup Three
                      </div>
                    </a>
                    <a
                      className="text-black text-decoration-none"
                      href="javascript:window.open('https://www.javatpoint.com/java-tutorial','_blank','height=500,width=300');"
                    >
                      <div className="border p-2 bg-blue-400 rounded-sm">
                        Popup Duplicate
                      </div>
                    </a>
                    <a
                      className="text-black text-decoration-none"
                      href=""
                      onClick={handleDuplicateTab}
                    >
                      <div className="border p-2 bg-blue-400 rounded-sm">
                        Duplicate Tab
                      </div>
                    </a>

                    <div
                      className="cursor-pointer border p-2 bg-blue-400 rounded-sm"
                      onClick={() => setButtonPopup(true)}
                    >
                      In Window Popup
                    </div>
                    <PopupBox trigger={buttonPopup} setTrigger={setButtonPopup}>
                      <div className="flex flex-col ">
                        <div className="m1-2 mt-2 p-2 bg-green-100 w-40 h-10 font-bold">
                          <h5>Popup Window</h5>
                        </div>
                        <div>
                          <h6 className="text-center flex flex-start mt-4">
                            Popup One body.. <br />
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur ac,
                            vestibulum at eros
                          </h6>
                        </div>
                      </div>
                    </PopupBox>

                    <div
                      className=" cursor-pointer border p-2 bg-blue-400 rounded-sm"
                      onClick={handleAlert}
                    >
                      Alert Box
                    </div>

                    <div
                      className="cursor-pointer border p-2 bg-blue-400 rounded-sm"
                      onClick={handleConfirm}
                    >
                      Confirm Box
                    </div>

                    <div
                      className=" cursor-pointer border p-2 bg-blue-400 rounded-sm"
                      onClick={handlePrompt}
                    >
                      Prompt Box
                    </div>

                    <div>
                      <p className="text-white">{promptMsg}</p>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>

            <div className="relative  my-72 mb-0 text-center bg-red-300 text-black">
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

export default Popups;
