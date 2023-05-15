import React, { useState, useEffect } from "react";
import styles from "./Mid.module.css";
import SearchBox from "../SearchBox/SearchBox";
import PaginatedItems from "../Accordion/Accordion";

function MidCol(props) {
  const [searchHistory, setSearchHistory] = useState([]);
  const getSearchedValue = (val) => {
   
  
    if (!searchHistory.includes(val) && val !== "") searchHistory.push(val);
    if (searchHistory.length > 10) {
      searchHistory.shift();
    }
    setSearchHistory([...searchHistory]);
    props.getSearchList(searchHistory, val);
  };

  console.log(props.searchResults);

  return (
    <div className={styles.container}>
      <SearchBox getSearchedValue={(val) => getSearchedValue(val)} />
      {props.searchResults.length > 0 ? (
        <PaginatedItems itemsPerPage={5} items={props.searchResults} />
      ) : (
        <>
          <div className={styles.regret}>
            <br />
            No Records Found For Selected Criteria
          </div>
        </>
      )}
    </div>
  );
}

export default MidCol;
