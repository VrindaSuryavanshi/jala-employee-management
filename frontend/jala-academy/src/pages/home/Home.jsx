import React, { useState } from "react";
import "./home.css";
import Sidebar from "../../layout/Sidebar";
import Header from "../../layout/Header";
import Main from "../../layout/Main";
import { AppContext } from "../../layout/contex/AppContex";

const Home = ({ logoutFn }) => {
  const defaultAppData = {
    sidebarVisible: true,
  };
  const [appData, setAppData] = useState(defaultAppData);

  return (
    <div className="w-full h-full">
      <AppContext.Provider value={{ appData, setAppData }}>
        <Header logoutFn={logoutFn} />
        <div className="flex">
          <Sidebar />
          <div className="w-full bg-gray-900 text-white h-fit text-center">
            <div className="my-20 m-2">
              <h1 className="text-4xl my-4">Welcome to JALA Academy</h1>

              <p>The world's best up-skilling academy</p>
              <div className="my-8 p-4">
                <strong>
                  Do you want to learn Selenium/cucumber Automation completely
                  with Practical Scenarios in 7 Days? Use this website to find
                  all the scenarios at one place. To understand or test RESTful
                  APIs, use the JALA Academy FREE live APIs. Seach on Google
                  with the keyword "JALA Academy Postman APIs"
                </strong>
              </div>

              <div className="my-4 border-t-4 border-indigo-400 bg-gray-100 text-black p-4 ">
                <p>
                  You learn Everything by doing projects if you are very serious
                  to gat a software job in 90 days{" "}
                  <a
                    className="text-blue-600"
                    href="http://jalatechnologies.com"
                  >
                    {" "}
                    http://jalatechnologies.com
                  </a>
                  <br /> Don't forget to read our website JALA Academy
                  completley to know more opportunities
                </p>
              </div>

              <div className="my-4 border-t-4 border-indigo-400 bg-gray-100 text-black p-4 ">
                <p>
                  <mark className="bg-yellow-200">
                    If you are a working professional, Up-skill with JALA
                    Academy Job Guarantee Programs to keep your Job secure for
                    10 Years
                  </mark>
                </p>
              </div>

              <div className="relative h-52 ">
                <div className="absolute inset-x-0 bottom-0 h-16 ...">
                  Copyright © 2024{" "}
                  <a
                    className="text-blue-600"
                    href="http://jalatechnologies.com"
                  >
                    {" "}
                    JALA Technologies
                  </a>
                  . All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppContext.Provider>
    </div>
  );
};

export default Home;
