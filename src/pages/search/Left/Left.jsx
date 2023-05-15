import React, { useEffect, useState } from "react";
import Filter from "../Filter/Filter";
import styles from "./Left.module.css";

const LeftCol = (props) => {
  const { state, court, caseType } = props.dropdowns;
  return (
    <div className={styles.container} style={{height:"45.75vw", position:"static"}}>
      <h4 className={styles.header}>Legal Intelligent Search Engine</h4>
      <Filter
        label="State"
        id="state"
        values={state}
        handleDropdownChange={props.handleDropdownChange}
        dropdown
      />
      <Filter
        label="Court"
        id="court"
        values={court}
        handleDropdownChange={props.handleDropdownChange}
        dropdown
      />
      <Filter
        label="Case Type"
        id="case_type"
        values={caseType}
        handleDropdownChange={props.handleDropdownChange}
        dropdown
      />
      <Filter
        label="Select Date"
        handleDateChange={props.handleDateChange}
        date
      />
    </div>
  );
};

export default LeftCol;
