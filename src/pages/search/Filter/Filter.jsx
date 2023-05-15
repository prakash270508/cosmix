import styles from "./Filter.module.css";
import React from "react";
import { DatePicker } from "antd";

const Filter = (props) => {
  const { id, label, values, dropdown, date } = props;
  const { RangePicker } = DatePicker;
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <label htmlFor={label}>{label}</label>
      </div>
      {dropdown && (
        <select
          name={label}
          id={id}
          className={styles.select}
          onChange={(e) => props.handleDropdownChange(e)}
        >
          {values.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      )}
      {/* {date && <input type='date' className={styles.date}/>}
       */}
      {date && (
        <RangePicker
          className={styles.date}
          onChange={(e) => props.handleDateChange(e)}
        />
      )}
    </div>
  );
};

export default Filter;
