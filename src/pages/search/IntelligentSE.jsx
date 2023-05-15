import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import LeftCol from "./Left/Left";
import MidCol from "./Mid/Mid";
import RightCol from "./Right/Right";
import endpoint from "./endpoint";

const IntelligentSE = () => {
  const [history, setHistory] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [dropdownValues, setDropdownValues] = useState({
    state: ["--ALL--"],
    court: ["--ALL--"],
    caseType: ["--ALL--"],
  });
  const [searchFilters, setSearchFilters] = useState({});

  const getSearchList = (list, value) => {
    let newList = [...list];
    setHistory(newList.reverse());

    let selectedTags = (...arrays) => [].concat(...arrays.filter((x) => x));
    let data = JSON.stringify({
      search_text: value,
      select_tags: selectedTags(searchFilters.state, searchFilters.court),
      case_type: searchFilters.case_type ? [searchFilters.case_type] : [],
      start_date: searchFilters.start_date,
      end_date: searchFilters.end_date,
    });
    fetch(`${endpoint}/v1/search_documents_tags`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: data,
    })
      .then((res) => res.json())
      .then((result) => {
        setSearchResults(result.data.search_results);
      });
  };

  const handleDropdownChange = (event) => {
    if (event.target.value !== "--ALL--") {
      setSearchFilters({
        ...searchFilters,
        ...{ [event.target.id]: event.target.value },
      });
    } else {
      let filters = { ...searchFilters };
      delete filters[event.target.id];
      setSearchFilters(filters);
    }
  };

  const handleDateChange = (event) => {
    setSearchFilters({
      ...searchFilters,
      ...{
        start_date: event[0]._d.toLocaleDateString(),
        end_date: event[1]._d.toLocaleDateString(),
      },
    });
  };

  useEffect(() => {
    fetch(`${endpoint}/v1/get_filter_data`)
      .then((res) => res.json())
      .then((result) => {
        const dropdowns = { ...dropdownValues };
        dropdowns.state = [...dropdowns.state, ...result.data.state];
        dropdowns.court = [...dropdowns.court, ...result.data.court];
        dropdowns.caseType = [...dropdowns.caseType, ...result.data.case_type];
        setDropdownValues(dropdowns);
      });
  }, []);

  console.log(searchResults);

  return (
    <div className="row">
      <div className="col-md-3" style={{ height: "100%" }}>
        <LeftCol
          dropdowns={dropdownValues}
          handleDropdownChange={handleDropdownChange}
          handleDateChange={handleDateChange}
        />
      </div>
      <div className="col-md-6">
        <MidCol getSearchList={getSearchList} searchResults={searchResults} />
      </div>
      <div className="col-md-3">
        <RightCol history={history} />
      </div>
    </div>

    // <Container fluid>
    //   <Row>
    //     <Col style={{ padding: "0" }}>
    //       <LeftCol
    //         dropdowns={dropdownValues}
    //         handleDropdownChange={handleDropdownChange}
    //         handleDateChange={handleDateChange}
    //       />
    //     </Col>
    //     <Col style={{ padding: "0" }} xs={6}>
    //       <MidCol getSearchList={getSearchList} searchResults={searchResults} />
    //     </Col>
    //     <Col style={{ padding: "0" }}>
    //       <RightCol history={history} />
    //     </Col>
    //   </Row>
    // </Container>
  );
};

export default IntelligentSE;
