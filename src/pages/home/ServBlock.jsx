import React from "react";
import ser1 from "../../utils/images/Service/ser1.jpg";
import ser2 from "../../utils/images/Service/ser2.jpg";
import ser21 from "../../utils/images/Service/s22.jpg";
import ser3 from "../../utils/images/Service/ser3.jpg"; 
import ser32 from "../../utils/images/Service/s32.jpg"; 
import ser33 from "../../utils/images/Service/s33.jpg"; 
import ser34 from "../../utils/images/Service/s34.jpg"; 
import ser4 from "../../utils/images/Service/ser4.jpg";
import ser42 from "../../utils/images/Service/s42.jpg";
import ser43 from "../../utils/images/Service/s43.jpg";
import ser5 from "../../utils/images/Service/ser5.jpg";
import ser52 from "../../utils/images/Service/s52.jpg";
import ser53 from "../../utils/images/Service/s53.jpg";
import ser6 from "../../utils/images/Service/ser6.jpg";
import ser62 from "../../utils/images/Service/s62.jpg";
import ser63 from "../../utils/images/Service/s63.jpg";
import ser64 from "../../utils/images/Service/s64.jpg";
import ser7 from "../../utils/images/Service/ser7.jpg";
import ser8 from "../../utils/images/Service/ser8.jpg";

export default function ServBlock({ data }) {
  return (
    <div className="row" style={{ marginTop: "10vw", marginBottom: "2vw" }}>
      <div className="col-md-12 ab-sec">
        <div className="col-md-6">
          <h3
            className="wow fadeInDown"
            data-wow-duration="1000ms"
            data-wow-delay="300ms"
            style={{
              visibility: "visible",
              animationDuration: "1000ms",
              animationDelay: "300ms",
              animationIterationCount: "fadeInDown",
            }}
          >
            <h2 style={{ color: "black", marginTop: "-2vw" }}>
              <b>{data.header}</b>
            </h2>
          </h3>
          <p style={{ fontSize: "15px" }}>{data.content}</p>
          <h3 style={{ color: "black" }}>
            <b>{data.header2}</b>
          </h3>
          <p>{data.content2}</p>
          <br />
        </div>
        <div
          className="col-md-5 ab-sec-img wow fadeInUp"
          data-wow-duration="1000ms"
          data-wow-delay="300ms"
        >
          <img
            style={{marginTop:"1vw"}}
            src={eval(data.img)}
            height={"350"}
            width={"500"}
            alt="website template image"
          />
        </div>
      </div>
    </div>
  );
}
