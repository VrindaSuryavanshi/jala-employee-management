import React, { useState } from "react";
import "../../pages/home/home.css";
import Sidebar from "../../layout/Sidebar";
import Header from "../../layout/Header";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./collapsible.css";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

import { FaHome } from "react-icons/fa";

import { AppContext } from "../../layout/contex/AppContex";

const Collapsible = () => {
  const string1 = `
          Teach and learn from each other 

          Collaborate on lesson plans-Two minds are better than one.

          Build your own social network 

          Get feedback regularly 

          Work together to solve problems 

          Become a teacher-leader

          Adopt a team mentality
          
          Ask for help

          Find a mentor

          Be open to new ideas

  `;
  const string2 = `
  Learn by doing. Always play with the code while learning1.

  Ask for help. You’ll need it
  
  TEACH SOMEONE ELSE
  
  FOCUS ON THE 20%
  
  Identifying the problem that needs solving
  
  Seek out more online resources. There’s a wealth of content
  
  Don’t just read the sample code. Tinker with it!
  
  Take breaks when debugging
  
  Keep Calm and Keep On Coding
  `;
  const string3 = `
  They want the outcome more than they want to obtain a skill

They do not have the discipline to stick with their idea long enough to see it live

They get distracted by what someone else is doing

They don't believe in themselves enough.

They fail once--and never try again

They don't learn how to discipline themselves

They care more about the end result, not the process

They surround themselves with people who are a negative influence.

They would rather settle for short-term rewards

They don't have a guaranteed path to achieve success

They don’t have the discipline to work hard enough

They become distracted by other aspects of their life

They don't know that failure is normal
  `;
  const string4 = `
  You are always tired

  You keep saying "after"
  
  You don’t think you can
  
  You think a lot, but do little
  
  You are playing small and you think it’s OK
  
  WhatsApp, Facebook, and TV are the highlight of your day
  
  You are not ready to break comfort
  
  You rely on escapism
  
  You have the exact same friends
  
  You have no idea what you want
  
  You don't think you deserve better
`;

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
              Collpsible Content
            </h2>

            <div className="text-black flex justify-end mb-2">
              <FaHome className="mt-1 mr-1" />
              <h1 className="text-base font-bold leading-7 text-gray-530 ">
                {" "}
                Home / More / collapsible Content
              </h1>
            </div>
            <hr className="text-black" />

            <div className="h-[50%] m-4 border-solid border-1 border-gray-600 text-white p-4 bg-gray-900">
              <Tabs
                defaultActiveKey="Single Collapse"
                id="tab-example"
                className="mb-3"
              >
                <Tab eventKey="Single Collapse" title="Single Collapse">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Know your goals and Prioritize Wisely{" "}
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            What are your priorities for the day? Make a list of
                            your priorities and plan your day. The tasks of the
                            day must be outlined with the most important and
                            urgent ones on top. Likewise, determine your
                            short-term and long-term goals and evaluate your
                            progress frequently.
                          </strong>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Be focused and Eliminate Distractions{" "}
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            Are you really present physically and mentally. Try
                            to block out all distractions so that you have
                          </strong>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Chose the right mentor to Succeed in career
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          <strong>
                            There is a big difference between a mentor and a
                            coach Mentoring is a long-term process based on
                            mutual trust and respect. Coaching, on the other
                            hand, is for a short period of time. The topmost
                            priority of a mentor is to help develop skills that
                            are not just relevant for the mentees in their
                            present job, but also for the future. A mentor has
                            the first-hand experience in the industry
                          </strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>

                <Tab eventKey="Multiple Collapse" title="Multiple Collapse">
                  <div
                    className="accordion"
                    id="accordionPanelsStayOpenExample"
                  >
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingOne"
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseOne"
                          aria-expanded="true"
                          aria-controls="panelsStayOpen-collapseOne"
                        >
                          Collaborate with Colleagues
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingOne"
                      >
                        <div className="accordion-body">
                          <pre>{string1}</pre>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingTwo"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseTwo"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseTwo"
                        >
                          Learn Anything Quickly
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingTwo"
                      >
                        <div className="accordion-body">
                          <pre>{string2}</pre>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingThree"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseThree"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseThree"
                        >
                          Reasons People Give Up on Their Goals Too Early
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingThree"
                      >
                        <div className="accordion-body">
                          <pre>{string3}</pre>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2
                        className="accordion-header"
                        id="panelsStayOpen-headingThree"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#panelsStayOpen-collapseThree"
                          aria-expanded="false"
                          aria-controls="panelsStayOpen-collapseThree"
                        >
                          Signs of Settling For Less In Life
                        </button>
                      </h2>
                      <div
                        id="panelsStayOpen-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingThree"
                      >
                        <div className="accordion-body">
                          <pre id="code">{string4}</pre>
                        </div>
                      </div>
                    </div>
                  </div>
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
