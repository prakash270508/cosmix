import React, { useEffect } from "react";
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
import { Link } from "react-router-dom";

const Service2 = () => {
  useEffect(() => {
    const scrollDistance = window.innerHeight * 1.9;
    window.scrollTo({
      top: scrollDistance,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <Home />
      <section id="service">
        <div className="container">
          <div className="col-md-8 col-md-offset-2">
            <div className="heading">
              <h2>
                OUR SERVI<span>CE</span>
              </h2>
              <div className="line"></div>
            </div>
          </div>
          <div className="row" style={{ marginTop: "7vw" }}>
            {serviceData &&
              serviceData.map((data, index) => (
                <Link key={index} to={`/service/${data.route}`}>
                  <div className="col-md-3 lift-up-img-container">
                    <img
                      src={eval(data.img)}
                      className="lift-up"
                      style={{ marginTop: "2vw" }}
                      alt=""
                    />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service2;
