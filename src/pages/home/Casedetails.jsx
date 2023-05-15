import React, { useEffect, useState } from "react";
import { Accordion, Card, useAccordionButton } from "react-bootstrap";
import { useParams } from "react-router-dom";
import endpoint from "../../../endpoint";

const CaseDetails = () => {
  const params = useParams();
  const [details, setDetails] = useState(null);
  const [headers, setHeaders] = useState([]);
  useEffect(() => {
    fetch(
      `${endpoint}/v1/fetch_more_details?file_name=${params.case}`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result.data);
        setDetails(result.data);
        setHeaders(Object.keys(result.data).filter((x) => x !== "FILENAME"));
      });
  }, []);
  return (
    <div>
      <h3>CaseDetails - {params.case}</h3>
      <a
        href={`${endpoint}/static/Input/${params.case}`}
        download
      >
        Click to download
      </a>
      <Collpase items={details} headers={headers} />
    </div>
  );
};

function Content({ children, eventKey }) {
  return (
    <div onClick={useAccordionButton(eventKey)} className="headerContainer">
      <div className="matterDiv">
        <span className="matter">{children}</span>
      </div>
      <div>
        <span className="plus">+</span>
      </div>
    </div>
  );
}

const Collpase = ({ items, headers }) => {
  return (
    <div className="accordianContainer">
      <Accordion>
        {headers &&
          headers.length > 0 &&
          headers.map((item, index) => (
            <Card className="cardStyling">
              <Card.Header className="cardHeaderStyling">
                <Content eventKey={index}>{item}</Content>
              </Card.Header>
              <Accordion.Collapse eventKey={index}>
                <Card.Body>
                  {items[item].length > 0 &&
                    items[item].map((x) => {
                      return <li>{x}</li>;
                    })}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
      </Accordion>
    </div>
  );
};

export default CaseDetails;
