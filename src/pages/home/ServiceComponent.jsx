import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ser1 from "../../utils/images/Service/ser1.jpg";
import ser2 from "../../utils/images/Service/ser2.jpg";
import ser3 from "../../utils/images/Service/ser3.jpg";
import ser4 from "../../utils/images/Service/ser4.jpg";
import ser5 from "../../utils/images/Service/ser5.jpg";
import ser6 from "../../utils/images/Service/ser6.jpg";
import ser7 from "../../utils/images/Service/ser7.jpg";
import ser8 from "../../utils/images/Service/ser8.jpg";
import Home from "./Home";
import { serviceData } from "../../data/serviceData";
import ServBlock from "./ServBlock";

export default function ServiceComponent() {
  const { laws } = useParams();

  const data = serviceData.find((ele) => ele.route == laws);

  useEffect(() => {
    const scrollDistance = window.innerHeight * data.scrollto;
    window.scrollTo({
      top: scrollDistance,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <Home />

      <div style={{ marginTop: "2vw" }} className="container">
        <div className="col-md-8 col-md-offset-2">
          <div className="heading">
            <h2 className="text-center">{data.title}</h2>
            <div className="line" style={{ width: `${data.widht}` }}></div>
          </div>
        </div>
        {data.contentData &&
          data.contentData.map((ele, index) => (
            <ServBlock key={index} data={ele} />
          ))}
      </div>
    </div>
  );
}
