import React from "react";

const DropDown = () => {
  return (
    <div>
      <h4 className="text-center">
        <b>Legal Intelligent Search Engine</b>
      </h4>
      <div
        className="select-wrapper"
        style={{ float: "left", marginBottom: "2vw", marginLeft: "13px" }}
      >
        <h5>
          <b>State</b>
        </h5>
        <select className="select">
          <option value="" disabled selected>
            -- All --
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
        </select>
      </div>
      <div
        className="select-wrapper"
        style={{ float: "left", marginBottom: "2vw", marginLeft: "13px" }}
      >
        <h5>
          <b>Court</b>
        </h5>
        <select className="select">
          <option value="" disabled selected>
            -- All --
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
        </select>
      </div>
      <div
        className="select-wrapper"
        style={{ float: "left", marginBottom: "2vw", marginLeft: "13px" }}
      >
        <h5>
          <b>Case Type</b>
        </h5>
        <select className="select">
          <option value="" disabled selected>
            -- All --
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
        </select>
      </div>
      <div
        className="select-wrapper"
        style={{ float: "left", marginBottom: "2vw", marginLeft: "13px" }}
      >
        <h5>
          <b>Date</b>
        </h5>
        <input type="date" className="select" style={{ width: "200px" }} />
      </div>
    </div>
  );
};

export default DropDown;
