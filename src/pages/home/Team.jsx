import React, { useEffect } from "react";
import Ht2 from "../../utils/images/team/ht2.jpg";
import Ht3 from "../../utils/images/team/ht3.jpg";
import Ht4 from "../../utils/images/team/ht4.jpg";
import sagarika from "../../utils/images/team/sagarika.jpg";
import saurabh from "../../utils/images/team/saurabh.jpg";
import Nainika from "../../utils/images/team/nainika.jpg";
import shrishti from "../../utils/images/team/shrishti.jpg";
import Founder2 from "../../utils/images/Aboutus/Founder2.jpeg";
import TeamCard from "../../components/TeamCard";
import TeamImg from "../../utils/images/Aboutus/team.jpeg";
import Home from "./Home";

const Team = () => {
  useEffect(()=>{
    const scrollDistance = window.innerHeight * 0.9;
    window.scrollTo({
      top: scrollDistance,
      behavior: "smooth",
    });
  },[])
  return (
    <div>
      <Home />
      <section id="team">
        <div className="container">
          <div className="col-md-8 col-md-offset-2">
            <div className="heading">
              <h2>
                OUR ATTO<span>RNEYS</span>
              </h2>
              <div className="line"></div>
            </div>
          </div>
          <div className="row" style={{ marginTop: "7vw" }}>
            <TeamCard
              img={Founder2}
              name={"Raghvendra P Singh"}
              about={
                "LEGAL INTELLIGENT SEARCH ENGINE’ specializes in several diversified areas of practice which include but are not limited to Intellectual Property"
              }
            />

            <TeamCard
              img={Ht2}
              name={"Abhishek Pushkar Saharan"}
              about={
                "LEGAL INTELLIGENT SEARCH ENGINE specializes in several diversified areas of practice which include but are not limited to Intellectual Property"
              }
            />

            <TeamCard
              img={Ht3}
              name={"Bhavya Nayyar"}
              about={
                "LEGAL INTELLIGENT SEARCH ENGINE’ specializes in severaldiversified areas of practice which include but are not limited to Intellectual Property"
              }
            />

            <TeamCard
              img={Ht4}
              name={"Rodney D Ryder"}
              about={
                "Rodney D Ryder is a leading technology, intellectual property, and corporate lawyer. He is the founding partner at Scriboard®. He is Communications and Information Technology."
              }
            />
          </div>
          <div
            className="col-md-8 col-md-offset-2"
            style={{ marginTop: "3vw" }}
          >
            <div className="heading">
              <h2>
                OUR T<span>EAMS</span>
              </h2>
              <div className="line"></div>
            </div>
          </div>
          <img src={TeamImg} alt="" />
          <div className="row" style={{ marginTop: "10vw" }}>
            <TeamCard img={sagarika} name={"Sagarika"} />
            <TeamCard img={saurabh} name={"Saurabh"} />
            <TeamCard img={Nainika} name={"Nainika"} />
            <TeamCard img={shrishti} name={"Shrishti"} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
