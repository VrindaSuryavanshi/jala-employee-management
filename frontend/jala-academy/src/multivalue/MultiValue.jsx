import React from "react";
import Select from "react-select";
import { langOption } from "./data";

const MultiValue = () => {
  return (
    <div>
      <Select
        // defaultValue={[langOption[2], langOption[3]]}
        isMulti
        name="program"
        options={langOption}
        className="basic-multi-select w-[60%] my-10 bg-gray-500"
        classNamePrefix="select"
        placeholder="Type to search...."
      />
    </div>
  );
};

export default MultiValue;
