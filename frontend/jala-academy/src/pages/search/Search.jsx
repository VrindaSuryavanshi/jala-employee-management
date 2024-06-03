import { useMemo, useEffect, useState, useContext } from "react";
import "../home/home.css";
import Sidebar from "../../layout/Sidebar";
import Header from "../../layout/Header";
import { FaHome } from "react-icons/fa";
import { AppContext } from "../../layout/contex/AppContex";
import axios from "axios";
import { Link } from "react-router-dom";
import DataPagination from "./Pegination";
import { ToastContainer, toast } from "react-toastify";

const Search = () => {
  const defaultAppData = {
    sidebarVisible: true,
  };
  const [appData, setAppData] = useState(defaultAppData);
  const [loading, setLoading] = useState(false);
  const [empData, setEmpData] = useState([]);
  const [records, setRecords] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [indx, setIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(8);
  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    setLoading(true);
    await axios
      .get("http://localhost:8086/api/v1/employee/getAll")
      .then((res) => {
        setEmpData(res.data);
        setRecords(res.data);

        setIndex(res.data.length);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const filter = (event) => {
    setInputValue(event.target.value);
    if (inputValue.length > 0) {
      setRecords(
        empData.filter((f) =>
          f.first_name.toLowerCase().includes(event.target.value)
        )
      );
    } else {
      setRecords(empData);
    }
  };
  const filterByMobile = (event) => {
    setMobileNo(event.target.value);
    if (mobileNo.length > 0) {
      setRecords(
        empData.filter((f) =>
          f.mobile.toString().toLowerCase().includes(event.target.value)
        )
      );
    } else {
      setRecords(empData);
    }
  };
  //get current Data
  const indexOfLastPage = currentPage * dataPerPage;
  const indexOfFirstPage = indexOfLastPage - dataPerPage;
  const currentData = records.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const onCancel = () => {
    setRecords(empData);
    setInputValue("");
    setMobileNo("");
  };

  const handleDelete = async (_id) => {
    await axios.delete("http://localhost:8086/api/v1/employee/delete/" + _id);
    toast.success("Record Deleted Successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    load();
  };
  let count = 0;

  return (
    <div className="w-full h-full">
      <AppContext.Provider value={{ appData, setAppData }}>
        <Header />
        <div className="flex">
          <Sidebar />

          <div className="w-full p-3 bg-gray-300 text-white h-fit">
            <h2 className="text-base font-bold leading-7 text-gray-900 text-xl">
              Employee Search
            </h2>

            <div className="text-black flex justify-end mb-2">
              <FaHome className="mt-1 mr-1" />
              <h1 className="text-base font-bold leading-7 text-gray-530 ">
                {" "}
                Home / Employee / Search{" "}
              </h1>
            </div>
            <hr className="text-black" />
            <Link to={"/create"}>
              <button type="button" className="btn btn-primary my-2 p-2">
                + add Employee
              </button>
            </Link>
            <Link to={"/data"}>
              <button type="button" className=" ml-4 btn btn-primary my-2 p-2">
                All Employee Data
              </button>
            </Link>
            <div className=" w-full ">
              <div className=" my-3 flex flex-wrap gap-12 text-black">
                <div>
                  Name :
                  <br />
                  <input
                    type="text"
                    className=" form-control text-black p-1 border-solid border-1 border-gray-600"
                    onChange={filter}
                    value={inputValue}
                    placeholder="search..."
                  />
                </div>

                <div>
                  Mobile number:
                  <br />
                  <input
                    type="number"
                    className="form-control text-black p-1  border-solid border-1 border-gray-600 "
                    onChange={filterByMobile}
                    value={mobileNo}
                    placeholder="search..."
                  />
                </div>
                <div className="my-4 flex flex-row gap-4">
                  {/* <button type="button" class="btn btn-success">Search</button> */}
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={onCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>

              <table className="table">
                <thead>
                  <tr>
                    {/* <th scope="col">#</th> */}
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email Id </th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Birth Date</th>
                    <th scope="col">Country</th>
                    <th scope="col">City</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((emp, index) => {
                    return (
                      <tr key={index}>
                        {/* <th scope="col">{count+1}</th> */}
                        <td scope="col">{emp.first_name}</td>
                        <td scope="col">{emp.last_name}</td>
                        <td scope="col">{emp.email} </td>
                        <td scope="col">{emp.mobile}</td>
                        <td scope="col">{emp.gender}</td>
                        <td scope="col">{emp.birth_date}</td>
                        <td scope="col">{emp.country}</td>
                        <td scope="col">{emp.city}</td>
                        <td>
                          <Link
                            to={`/update/${emp._id}`}
                            class="btn btn-primary"
                          >
                            Edit
                          </Link>{" "}
                          &nbsp;
                          <button
                            type="button"
                            class="btn btn-danger"
                            onClick={() => handleDelete(emp._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <ToastContainer />
            <DataPagination
              dataPerPage={dataPerPage}
              totalData={indx}
              paginate={paginate}
              className="w-full h-200 bg-gray-400"
            />
            <div className="relative text-center h-72">
              <div className="absolute inset-x-0 bottom-0 ...">
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

export default Search;
