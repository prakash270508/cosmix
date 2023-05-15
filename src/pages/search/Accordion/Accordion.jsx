import React, { Fragment, useEffect, useState } from "react";
import HTMLReactParser from "html-react-parser";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import "./Accordion.css";
import ReactPaginate from "react-paginate";
import { Link ,useNavigate} from "react-router-dom";

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

const Collpase = ({ currentItems }) => {
  const navigate=useNavigate();

  return (
    <div className="accordianContainer">
      <Accordion>
        {currentItems && currentItems.length > 0 ?  currentItems.map((item, index) => (
    <Card className="cardStyling" key={index}>
      <Card.Header className="cardHeaderStyling">
        <Content eventKey={index}>
          <span  style={{color:"black" ,cursor:"pointer"}}  onClick={()=>window.open(`/details?case=${item.title}`,'_blank')}>
          {item.title}
          </span>
     
   
         
        </Content>
      </Card.Header>
      <Accordion.Collapse eventKey={index}>
        <Card.Body>
          <h6>Highlights:</h6>
          {HTMLReactParser(item.highlights)}
          <br />
          <br />
          <h6>Casename:</h6>
          {Array.isArray( item.case_name) ? item.case_name.map((ele,i)=>(
            <li key={i}>{ele}</li>
          )):""}
         
          <br />
          <h6>Citation:</h6>
          {Array.isArray( item.citation) ? item.citation.map((ele,i)=>(
            <li key={i}>{ele}</li>
          )):""}
          
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  )):"" }
 
        
      
      </Accordion>
    </div>
  );
};

const PaginatedItems = ({ itemsPerPage, items }) => {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  console.log(items);
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  console.log(currentItems);

  return (
    <>
      {items && items.length > 0 && (
        <>
          <Collpase currentItems={currentItems} />
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </>
  );
};

export default PaginatedItems;
