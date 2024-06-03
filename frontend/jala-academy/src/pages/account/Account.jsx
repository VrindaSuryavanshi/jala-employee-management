import React, { useState, useEffect } from "react";
import "./account.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Home from "../home/Home";

const Account = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("training@jalaacademy.com");
  const [password, setPassword] = useState("jobprogram");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLog, setisLog] = useState(false);

  useEffect(() => {
    const emailStore = localStorage.getItem("email");
    const passStore = localStorage.getItem("password");
    const rmeStore = localStorage.getItem("rememberMeN");
    if (
      rmeStore === "true" &&
      emailStore === "training@jalaacademy.com" &&
      passStore === "jobprogram"
    ) {
      setisLog(true);
    }
    if (emailStore) {
      setEmail(emailStore);
    }
    if (passStore) {
      setPassword(passStore);
    }
  }, []);

  const handelSignIn = () => {
    if (rememberMe) {
      localStorage.setItem("empToken", "login-employee");
    }
    if (email === "training@jalaacademy.com" && password === "jobprogram") {
      setisLog(true);
      if (rememberMe) {
        // setEmail("training@jalaacademy.com");
        // setPassword("jobprogram");

        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("rememberMeN", true);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("rememberMeN");
      }

      navigate("/home");
    } else {
      console.log("err");
      toast.error("Invalid Email or Password!", {
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
  const logoutFn = () => {
    setisLog(false);
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("rememberMeN");
  };

  return (
    <>
      {isLog ? (
        <Home logoutFn={logoutFn} />
      ) : (
        <div
          className="body-container h-screen w-full"
          //   style={{ background: "red", height: "100vh" }}
        >
          <div className="d-flex justify-content-center  flex-column mb-1 gap-2 details-container p-2">
            <h2 style={{ fontSize: "35px", fontWeight: "700" }}>
              JALA Academy
            </h2>
            <h3>Use the bellow details to log in</h3>
            <p>Email : training@jalaacademy.com</p>
            <p>Password : jobprogram</p>

            <strong>
              <mark>
                Learn everything on Real-Time Scenarios. FREE for all.
              </mark>
            </strong>
          </div>

          <form action="">
            <div className="acoount-container">
              <div className="mb-2 row ">
                <div className="col-sm-10">
                  <h5 className=" ml-10 text-center font-semibold">SignIn</h5>

                  <input
                    type="text"
                    readonly
                    className="form-control email-input"
                    id="staticEmail"
                    placeholder="enter email Id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                </div>
              </div>
              <div className="mb-3 row">
                <div className="col-sm-10">
                  <input
                    type="password"
                    className="form-control password-input"
                    id="inputPassword"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
              </div>

              <div className="remember-forgot">
                <div className="form-check check-remember">
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    <input
                      className="form-check-input"
                      checked={rememberMe}
                      type="checkbox"
                      value=""
                      onChange={() => setRememberMe(!rememberMe)}
                      id="flexCheckDefault"
                    />
                    Remember me!
                  </label>
                </div>
                <Link to={"/forgotpass"}>
                  <div className="forgot-link">
                    <label
                      className="form-check-label"
                      style={{ fontWeight: 500, color: "gray" }}
                    >
                      Forgot password?
                    </label>
                  </div>
                </Link>
              </div>

              <div className="sign-button">
                {/* <Link to={"/home"}>  */}
                <button
                  type="button"
                  className="btn btn-primary text-black bg-blue-400"
                  onClick={handelSignIn}
                >
                  Sign In
                </button>
                {/* </Link> */}
              </div>

              <div className="or-adminlogin d-flex justify-content-center  flex-column mb-3 gap-3">
                <p>-OR-</p>
                <p>
                  <a
                    href="/admin"
                    className="link-primary link-offset-2  link-underline-opacity-10-hover p-2"
                  >
                    Admin Login
                  </a>
                </p>
              </div>
            </div>
          </form>

          <div className="footer-container ">
            <footer>
              <p>
                JALA Academy offers Job Guaranteed Programs for Freshers to 12
                years’ experience on Full Stack Development / Automation Testing
                / Dev-Ops / QA/ SDET/Cyber Security / RPA / Cloud Technologies.
                Training would be completely on live Project scenarios Read our
                website JALA Academy for more details :{" "}
                <a
                  href="https://jalaacademy.com/"
                  style={{ cursor: "pointer" }}
                >
                  https://jalaacademy.com/
                </a>
              </p>
            </footer>
            <ToastContainer />
          </div>
        </div>
      )}
    </>
  );
};

export default Account;
