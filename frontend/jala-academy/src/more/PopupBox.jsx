import React from "react";
import { IoClose } from "react-icons/io5";
import "./popupBox.css";
const PopupBox = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          className="close-btn"
          onClick={() => {
            props.setTrigger(false);
            //  console.log("clicked");
          }}
        >
          <IoClose />
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopupBox;
