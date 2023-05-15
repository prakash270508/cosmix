import React, { useEffect } from "react";
import Two from "../../utils/images/Aboutus/2Copy.jpeg";
import Founder from "../../utils/images/Aboutus/Founder.jpeg";
import Gall1 from "../../utils/images/Gallery/1.png";
import Gall2 from "../../utils/images/Gallery/2.png";
import Gall3 from "../../utils/images/Gallery/3.png";
import Home from "./Home";

const About3 = () => {
  useEffect(() => {
    const scrollDistance = window.innerHeight * 0.93;
    window.scrollTo({
      top: scrollDistance,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <Home />
      <section id="about">
        <div className="container">
          <div className="col-md-8 col-md-offset-2">
            <div className="heading">
              <h2>
                ABOUT <span>US</span>
              </h2>
              <div className="line"></div>
            </div>
          </div>
          <div className="row" style={{ marginTop: "10vw" }}>
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
                  <span>L</span>EGAL INTELLIGENT SEARCH ENGINE
                </h3>
                <p>
                  <span>
                    <strong>‘L</strong>
                  </span>
                  EGAL INTERNATIONAL SEARCH ENGINE’ specializes in several diversified
                  areas of practice which include but are not limited to
                  Intellectual Property, Dispute Resolution, Technology, Media
                  and Telecommunications, Information Technology, Banking &
                  Finance, Litigation, Advisory, Regulatory Compliance,
                  Corporate and Real Estate laws. It has a dedicated team of
                  specialists who specialize in handling matters related to Real
                  Estate Laws and Due Diligence.
                </p>
                <br />
                <p>
                  It is submitted that the firm provides services to several
                  Public Sector Banks on wide ranging issues such as the
                  drafting and reviewing of Corporate Documentation, Project
                  Finance and the deployment of Internet Banking facility. The
                  firm advises several banks and financial institutions on
                  Internet Banking issues in India.
                </p>
                <br />
                <p>
                  ‘LEGAL INTELLIGENT SEARCH ENGINE’ has been acquiring great renown
                  due to increasing expertise in international commercial
                  arbitration and intellectual property related dispute
                  resolution. The firm is totally responsible for handling the
                  entire trademark portfolio of several leading companies from
                  different parts of the world.
                </p>
                <br />
                <button
                  className="btn"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  MORE ABOUT US
                </button>
              </div>
              <div
                className="col-md-5 ab-sec-img wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="300ms"
              >
                <img
                  src={Two}
                  height={"550"}
                  width={"600"}
                  alt="website template image"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="row"
          style={{ marginTop: "7vw", backgroundColor: "#f3efef" }}
        >
          <div className="col-md-6">
            <img src={Founder} height={"400"} alt="" />
          </div>
          <div className="col-md-6">
            <div style={{ marginTop: "3vw", marginRight: "3vw" }}>
              <p>
                <b>ABOUT THE FOUNDER</b>
              </p>
              <div>
                <h2>
                  <span>Mr. Raghvendra P. </span>Singh
                </h2>
                <p>
                  Mr. Raghvendra P. Singh is a leading practicing lawyer and
                  founding Partner of ‘LEGAL INTELLIGENT SEARCH ENGINE’. He is
                  enrolled as Member of Chartered Institute of Arbitrators-
                  London. He has more than 21 years of rich experience in
                  various field of Law primarily focused on real estate practice
                  which includes due diligence reports for premises acquisition
                  on lease and/or out right basis especially covering the area
                  of Delhi, NCR, Punjab, Haryana, UP, Gujarat areas.
                </p>
                <br />
                <p>
                  Mr. Raghvendra P. Singh has worked for various Public Limited
                  Companies such as BLB Ltd, Kotak Mahindra Bank as In-house
                  Lawyer for Real Estate and Corporate Advisory.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-md-offset-2">
          <div className="heading">
            <h2>
              G<span>ALLERY</span>
            </h2>
            <div className="line"></div>
          </div>
        </div>
        <div className="container">
          <div className="row" style={{ marginTop: "7vw" }}>
            <div className="col-md-4 zoom-img-container">
              <img src={Gall1} className="zoom-img" alt="" />
            </div>
            <div className="col-md-4 zoom-img-container mx-4">
              <img src={Gall2} className="zoom-img" alt="" />
            </div>
            <div className="col-md-4 zoom-img-container">
              <img src={Gall3} className="zoom-img" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About3;
