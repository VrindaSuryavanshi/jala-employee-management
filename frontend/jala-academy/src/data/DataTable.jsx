import { useMemo, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import axios, { Axios } from "axios";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { AppContext } from "../layout/contex/AppContex";

const DataTable = ({ props }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [fnames, setFNames] = [];

  useEffect(() => {
    getAllData();
    getEmpNames();
  }, []);

  const firstName = [];
  const getEmpNames = async () => {
    try {
      const setEmpName = await axios.get(
        "http://localhost:8086/api/v1/employee/getAll"
      );

      const result = setEmpName.data;
      result.map((fname) => {
        firstName.push(fname.first_name);
      });

      setLoading(false);
    } catch (err) {
      console.log("error", err);
    }
  };

  const getAllData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8086/api/v1/employee/getAll"
      );

      // console.log("data" , response);
      setData(response.data);
      setLoading(false);
    } catch (err) {
      console.log("error", err);
    }
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "first_name",
        header: "First Name",
        size: 50,
      },
      {
        accessorKey: "last_name",
        header: "Last Name",
        size: 50,
      },
      {
        accessorKey: "mobile",
        header: "Mobile No.",
        size: 50,
      },
      {
        accessorKey: "email",
        header: "Email Id",
        size: 50,
      },
      {
        accessorKey: "gender",
        header: "Gender",
        size: 50,
      },
      {
        accessorKey: "birth_date",
        header: "Birth date",
        size: 50,
      },
      {
        accessorKey: "country",
        header: "Country",
        size: 50,
      },
      {
        accessorKey: "city",
        header: "City",
        size: 50,
      },
      {
        accessorKey: "address",
        header: "Address",
        size: 50,
      },
      {
        accessorKey: "skills",
        header: "Skills",
        size: 50,
      },
    ],
    []
  );
  const table = useMaterialReactTable({
    columns,
    data,
    muiTableBodyProps: {
      sx: {
        //stripe the rows, make odd rows a darker color
        "& td:nth-of-type(odd)": {
          backgroundColor: "#f5f5f5",
        },
      },
    },
    muiTableBodyCellProps: {
      sx: {
        borderRight: "2px solid #e0e0e0", //add a border between columns
      },
    },
  });

  return (
    <>
      <Link to={"/search"}>
        <button type="button" className="btn btn-primary my-2 p-2">
          Serach Employee
        </button>
      </Link>
      <Link to={"/home"}>
        <button type="button" className="ml-4 btn btn-primary my-2 p-2">
          Home
        </button>
      </Link>
      <div className="dataDetails text-black" style={{ display: "flex" }}>
        {loading ? (
          <div>
            <h3>Loading...</h3>
          </div>
        ) : (
          <div
            className="dataContainer"
            style={{
              flex: 2,
              width: "100vh",
              height: "50%",
              overflow: "auto",
              marginLeft: "5px",
            }}
          >
            <MaterialReactTable columns={columns} data={data} table={table} />
          </div>
        )}
      </div>
    </>
  );
};

export default DataTable;
