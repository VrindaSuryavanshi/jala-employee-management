import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "../home/home.css";
import Sidebar from "../../layout/Sidebar";
import Header from "../../layout/Header";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AppContext } from "../../layout/contex/AppContex";

const Create = () => {
  const navigate = useNavigate();

  const countries = [
    "-Select Country-",
    "Bangladesh",
    "Canada",
    "China",
    "France",
    "India",
    "Japan",
    "Nepal",
    "Sri iLanka",
    "UK",
    "USA",
  ];
  const Cities = {
    "-Select Country-": ["-Select City"],
    Bangladesh: [
      "Dhaka",
      "Chattogram",
      "	Gazipur",
      "Narayanganj",
      "Khulna",
      "Rangpur",
    ],
    Canada: [
      "Alberta",
      "Banff",
      " Brooks",
      " Calgary",
      " Edmonton",
      " Fort McMurray",
      " Grande Prairie",
      " Jasper",
    ],
    China: ["Hong Kong", "Macau", "Beijing", "Chongqing", "Anqing", "Fuyang"],
    France: [
      "Paris",
      "Marseille",
      "Lyon",
      "Nantes",
      "Montpellier",
      "Colombes",
      "Le Tampon",
    ],
    India: [
      "Pune",
      "Nagpur",
      "Mumbai",
      "Bhopal",
      "Hydrabad",
      "Chennai",
      "Delhi",
      "Kolkata",
    ],
    Japan: ["Akashi", "Funabashi", "Fukui", "Gifu", "Tokyo"],
    Nepal: ["Kathmandu", "Lalitpur", "Ghorahi", "Dhangadhi"],
    "Sri iLanka": ["Colombo", "Dehiwala-Mount Lavinia", "Negombo"],
    UK: [
      "London",
      "Westminster",
      "Leeds",
      "Birmingham",
      "Bradford",
      "Manchester",
    ],
    USA: ["New York[c]", "Los Angeles", "Houston", "San Antonio", "San Jose"],
  };
  const [checked, setChecked] = React.useState(false);
  function handleChange(e) {
    setChecked(e.target.checked);
  }

  //console.log(selectedCountry);

  const defaultAppData = {
    sidebarVisible: true,
  };
  const [appData, setAppData] = useState(defaultAppData);

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setmobile] = useState();
  const [birth_date, setBirthDdate] = useState();
  const [gender, setGender] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [allEmployee, setAllEmployee] = useState({});

  async function load() {
    const result = await axios.get(
      "http://localhost:8086/api/v1/employee/getAll"
    );
    setAllEmployee(result.data);
    //   console.log(result.data);
  }

  async function save(event) {
    event.preventDefault();

    try {
      await axios.post("http://localhost:8086/api/v1/employee/save", {
        first_name: first_name,
        last_name: last_name,
        mobile: mobile,
        birth_date: birth_date,
        email: email,
        gender: gender,
        country: selectedCountry,
        city: city,
        address: address,
      });

      alert("Record Save Successfully...!");

      load();

      navigate("/search");
    } catch (err) {
      alert("Details Storing fail");
    }
  }

  const cancel = () => {
    setFirstName("");
    setLastName("");
    setmobile("");
    setBirthDdate("");
    setEmail("");
    setGender("");
    setSelectedCountry("");
    setCity("");
    setAddress("");
  };

  return (
    <div className="w-full h-max">
      <AppContext.Provider value={{ appData, setAppData }}>
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="w-full  bg-gray-200 h-full px-4 py-3 ">
            <h2 className="text-base font-bold leading-7 text-gray-900 text-xl">
              Employee Details
            </h2>

            <div className="text-black flex justify-end mb-2">
              <FaHome className="mt-1 mr-1" />
              <h1 className="text-base font-bold leading-7 text-gray-530 ">
                {" "}
                Home / Employee / create{" "}
              </h1>
            </div>
            <hr />

            <Link to={"/search"}>
              <button type="button" className="btn btn-primary my-2 p-2">
                Employee List
              </button>
            </Link>
            <form onSubmit={save}>
              <div className="space-y-12 text-gray-900 my-4 border-solid border-1 border-indigo-400 px-4 py-1">
                <div className="border-b border-gray-900/10 pb-12">
                  <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        First name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          placeholder=" First name"
                          name="first-name"
                          id="first_name"
                          autoComplete="given-name"
                          value={first_name}
                          onChange={(event) => {
                            setFirstName(event.target.value);
                          }}
                          className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          required
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Last name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          placeholder="Last name"
                          name="last_name"
                          id="last_name"
                          autoComplete="family-name"
                          value={last_name}
                          onChange={(event) => {
                            setLastName(event.target.value);
                          }}
                          required
                          className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="m-number"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Mobile number
                      </label>
                      <div className="mt-2">
                        <input
                          type="number"
                          placeholder="Mobile number"
                          name="m-number"
                          id="m-number"
                          autoComplete="family-name"
                          value={mobile}
                          onChange={(event) => {
                            setmobile(event.target.value);
                          }}
                          required
                          className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="b-date"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Date of birth
                      </label>
                      <div className="mt-2">
                        <input
                          type="date"
                          name="birth_date"
                          id="birth_date"
                          value={birth_date}
                          onChange={(event) => {
                            setBirthDdate(event.target.value);
                          }}
                          required
                          autoComplete="family-name"
                          className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          placeholder="Email address"
                          id="email"
                          name="email"
                          type="email"
                          value={email}
                          onChange={(event) => {
                            setEmail(event.target.value);
                          }}
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="mt-4 space-y-2 flex  gap-0.1">
                        <div>
                          <legend className="text-sm m-2.5 font-semibold text-gray-900">
                            Gender:
                          </legend>
                        </div>

                        <div className="flex items-center gap-x-2">
                          <label
                            htmlFor="pushRadio"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            <input
                              id="gender"
                              name="gender"
                              value="Male"
                              onChange={(event) => {
                                setGender(event.target.value);
                              }}
                              type="radio"
                              className=" border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            &nbsp; Male
                          </label>
                        </div>
                        <div className="flex items-center gap-x-2 ml-2">
                          <label
                            htmlFor="push-email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            <input
                              id="gender"
                              name="gender"
                              value="Female"
                              onChange={(event) => {
                                setGender(event.target.value);
                              }}
                              type="radio"
                              className=" border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            &nbsp; Female
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Country
                      </label>
                      <div className="mt-2">
                        <select
                          value={selectedCountry}
                          onChange={(e) => {
                            setSelectedCountry(e.target.value);
                          }}
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          required
                          className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          {countries.map((country) => {
                            return <option>{country}</option>;
                          })}
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        City(Select country to select city)
                      </label>
                      <div className="mt-2">
                        {selectedCountry && !checked && (
                          <select
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            value={city}
                            onChange={(event) => {
                              setCity(event.target.value);
                            }}
                            required
                            className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          >
                            {Cities[selectedCountry].map((city) => {
                              return <option required>{city}</option>;
                            })}
                          </select>
                        )}
                      </div>
                    </div>

                    <fieldset>
                      <div className="mt-4 space-y-2 flex justify-evenly gap-x-2">
                        <div className="flex items-center gap-x-3">
                          <input
                            id=""
                            name="push-notifications"
                            type="checkbox"
                            onChange={handleChange}
                            className=" w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="push-everything"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Other city
                          </label>
                        </div>
                      </div>
                    </fieldset>
                    {selectedCountry && checked ? (
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Other City
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            placeholder=" Other City"
                            value={city}
                            onChange={(event) => {
                              setCity(event.target.value);
                            }}
                            name="city"
                            id="city"
                            autoComplete="given-name"
                            required
                            className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    ) : (
                      <div> </div>
                    )}

                    <div className="col-span-full">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Address
                      </label>
                      <div className="mt-2">
                        <input
                          type="textarea"
                          placeholder="Address"
                          name="street-address"
                          id="street-address"
                          value={address}
                          onChange={(event) => {
                            setAddress(event.target.value);
                          }}
                          autoComplete="street-address"
                          required
                          className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Skills
                      </label>

                      <div className="px-8 py-2 col-span-full">
                        <div className=" m-2 ">
                          <input
                            id="first"
                            type="checkbox"
                            className="w-4 h-4 text-blue-800  
                                  focus:ring-red-500 focus:ring-2"
                          />
                          <label
                            htmlFor="first"
                            className="ms-2 text-sm font-medium"
                          >
                            Middleware
                          </label>
                        </div>
                        <div className=" m-2">
                          <input
                            id="second"
                            type="checkbox"
                            className="w-4 h-4 text-blue-800  
                                  focus:ring-red-500 focus:ring-2"
                          />
                          <label
                            htmlFor="second"
                            className="ms-2 text-sm font-medium"
                          >
                            AWS
                          </label>
                        </div>
                        <div className="m-2">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 "
                          />
                          <label
                            htmlFor=""
                            className="ms-2 text-sm font-medium"
                          >
                            DevOps
                          </label>
                        </div>
                        <div className=" m-2">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-600"
                          />
                          <label
                            htmlFor=""
                            className="ms-2 text-sm font-medium"
                          >
                            FullStack Devloper
                          </label>
                        </div>
                        <div className=" m-2">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-600"
                          />
                          <label
                            htmlFor=""
                            className="ms-2 text-sm font-medium"
                          >
                            QA-Automation
                          </label>
                        </div>
                        <div className=" m-2">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-600"
                          />
                          <label
                            htmlFor=""
                            className="ms-2 text-sm font-medium"
                          >
                            WebServices
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  type="submit"
                  // onClick={save}
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                </button>

                <button
                  type="button"
                  onClick={cancel}
                  className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Cancel
                </button>
              </div>
            </form>

            <div className="relative h-20 text-center">
              <div className="absolute inset-x-0 bottom-0 h-16 ...">
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

export default Create;
