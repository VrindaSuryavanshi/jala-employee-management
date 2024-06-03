import React, { useState } from "react";
import "../pages/home/home.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Header from "../layout/Header";
import { AppContext } from "../layout/contex/AppContex";
import Sidebar from "../layout/Sidebar";
import { FaHome } from "react-icons/fa";

const Muitiple_Tabs = () => {
  const defaultAppData = {
    sidebarVisible: true,
  };
  const [appData, setAppData] = useState(defaultAppData);

  return (
    <div className="w-full h-full">
      <AppContext.Provider value={{ appData, setAppData }}>
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="w-full bg-gray-200 text-white h-screen px-3 py-3">
            <h2 className="text-base font-bold leading-7 text-gray-900 text-xl">
              Mutliple Tabs
            </h2>

            <div className="text-black flex justify-end mb-2">
              <FaHome className="mt-1 mr-1" />
              <h1 className="text-base font-bold leading-7 text-gray-530 ">
                {" "}
                Home / More / Mutiple tabs{" "}
              </h1>
            </div>
            <hr className="text-black" />
            <div className="m-4 border-solid border-1 border-gray-600 text-white p-4 bg-gray-900">
              <Tabs
                defaultActiveKey="Plan to Succeed"
                id="tab-example"
                className="mb-3"
              >
                <Tab eventKey="Plan to Succeed" title="Plan to Succeed">
                  <p>
                    Congratulations, You are in the best place to learn the
                    technologies for JOB. Please strictly follow the plan for
                    the first 45 days to see the unbelievable results.
                    <br />
                    <br />
                    You must UNLEARN to LEARN new things every day as
                    technologies are changing faster than ever and Because the
                    old rules will no longer apply...and so your old knowledge
                    is. It's time for us to think beyond.
                    <br /> <br />
                    It's not just learning technologies, Also You learn how to
                    use your knowledge and experience to get a job in less than
                    100 days.
                  </p>

                  <div className="my-4 flex flex-row gap-4">
                    <input type="text" className="text-black p-1 w-[40%]" />
                    <input type="text" className="text-black p-1 w-[40%]" />
                  </div>
                </Tab>
                <Tab eventKey="UnLearning" title="UnLearning">
                  <p>
                    The first step towards becoming an “unlearned” is not just
                    to have a thirst for knowledge but to question our
                    knowledge. Discussing our knowledge with those who are
                    competent in a particular field, being challenged
                    constantly, and being ready to be proved wrong will help us
                    understand whether what we have learned is still relevant or
                    obsolete. It is also important to question one’s belief
                    system and check whether we are treating myths as scientific
                    facts.
                    <br />
                    <br />
                    The next important step is to take steps to develop creative
                    and critical thinking.
                  </p>

                  <div className="my-4 flex flex-row gap-4">
                    <input type="text" className="text-black p-1 w-[40%]" />
                    <input type="text" className="text-black p-1 w-[40%]" />
                  </div>
                </Tab>
                <Tab eventKey="Ways of UnLearning" title="Ways of UnLearning">
                  <p>
                    The first step towards becoming an “unlearned” is not just
                    to have a thirst for knowledge but to question our
                    knowledge. Discussing our knowledge with those who are
                    competent in a particular field, being challenged
                    constantly, and being ready to be proved wrong will help us
                    understand whether what we have learned is still relevant or
                    obsolete. It is also important to question one’s belief
                    system and check whether we are treating myths as scientific
                    facts.
                    <br></br>
                    <br />
                    The next important step is to take steps to develop creative
                    and critical thinking.
                  </p>

                  <div className="my-4 flex flex-row gap-4">
                    <input type="text" className="text-black p-1 w-[40%]" />
                    <input type="text" className="text-black p-1 w-[40%]" />
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

export default Muitiple_Tabs;
