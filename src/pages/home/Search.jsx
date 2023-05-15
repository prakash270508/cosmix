import React from "react";
import Intelligent from '../search/IntelligentSE'

const Search = () => {
  return (
    <div>
        <Intelligent />
      {/* <div style={{ marginTop: "7vw" }}>
        <div className="row">
          <div
            className="col-md-2"
            style={{
              backgroundColor: "#f3f0f0",
              borderRight: "1px solid #ddd8d8",
            }}
          >
            <DropDown />
          </div>
          <div className="col-md-9" style={{ marginTop: "3vw" }}>
            <div className="mx-4">
              <input
                type="text"
                className="form-control boldPlaceholder"
                placeholder="--Type Query And Enter--"
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Search;
