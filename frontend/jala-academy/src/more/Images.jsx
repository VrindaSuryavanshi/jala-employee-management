import React, { useState } from "react";
import "../pages/home/home.css";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";
import { FaHome } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AppContext } from "../layout/contex/AppContex";

const Images = () => {
  const defaultAppData = {
    sidebarVisible: true,
  };
  const [appData, setAppData] = useState(defaultAppData);
  const [fileName, setfileName] = useState([]);
  const [selectedIamges, setselectedIamges] = useState([]);
  const [upload, setUpload] = useState([]);

  const onSelectFile = (event) => {
    const selectedFile = event.target.files;
    const selectedFileArray = Array.from(selectedFile);

    var images = [];
    const imgArray = selectedFileArray.map((img) => {
      images.push(img.name);
    });
    setfileName(images);

    const imagesArray = selectedFileArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setselectedIamges(imagesArray);
  };
  console.log(selectedIamges);

  const handleUpload = () => {
    if (selectedIamges.length <= 0) {
      toast.error("please select image!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      setUpload(selectedIamges);
      toast.success("image Uploaded Successfully !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  // const notify = () => toast("Wow so easy!");

  return (
    <div className="w-full h-full">
      <AppContext.Provider value={{ appData, setAppData }}>
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="w-full bg-gray-200 text-white h-screen px-3 py-3">
            <h2 className="text-base font-bold leading-7 text-gray-900 text-xl">
              Images download/uplaod
            </h2>

            <div className="text-black flex justify-end mb-2">
              <FaHome className="mt-1 mr-1" />
              <h1 className="text-base font-bold leading-7 text-gray-530 ">
                {" "}
                Home / More /{" "}
              </h1>
              <p className="p-1">Images download/uplaod</p>
            </div>
            <hr className="text-black" />
            <div className="flex flex-row gap-4">
              <div className="mb-3 basis-1/2">
                <label
                  htmlFor="images"
                  className=" text-black form-label my-6 text-bold"
                >
                  Select Image file :
                </label>
                <input
                  className="form-control w-[100%] "
                  type="file"
                  id="formFileMultiple"
                  name="images"
                  onChange={onSelectFile}
                  multiple
                  accept="image/png , image/jpeg , image/webp"
                />
              </div>

              <div className="mb-3 basis-1/4">
                <label
                  htmlFor="formFileMultiple"
                  className=" text-black form-label my-6 text-bold"
                >
                  {" "}
                  Image file :
                </label>
                <input
                  className="form-control w-[100%]  "
                  type="text"
                  id="formTextFile"
                  value={fileName}
                />
              </div>

              <div className="mb-3 basis-1/4 py-16 my-2">
                <button
                  type="button"
                  className="btn btn-success "
                  onClick={handleUpload}
                >
                  Upload
                </button>
              </div>
            </div>

            <h5 className="text-black">List Of Images : </h5>
            <br />
            <div className="images grid grid-flow-row-dense grid-cols-4 grid-rows-3 gap-y-2">
              {upload &&
                upload.map((image, index) => {
                  return (
                    <div className="image" key={image}>
                      <a href={selectedIamges}>
                        <img
                          src={image}
                          style={{ width: "300px", height: "200px" }}
                        />
                      </a>
                      <button
                        className="text-red-700 w-fit h-fit bg-red-400 m-2 rounded-m"
                        onClick={() => {
                          setUpload(upload.filter((e) => e !== image));
                          toast.error("Image Deleted Successfully!", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                          });
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
            </div>
            <ToastContainer />
          </div>
        </div>
      </AppContext.Provider>
    </div>
  );
};

export default Images;
