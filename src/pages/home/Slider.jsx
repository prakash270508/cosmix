import React, { useEffect } from "react";
import corousal1 from "../../utils/images/Slider/01.jpg";
import corousal2 from "../../utils/images/Slider/02.jpg";
import corousal3 from "../../utils/images/Slider/03.jpg";

export default function Slider() {
  return (
    <div>
      <section id="slider">
        <div id="home-carousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div
              className="item next left"
              style={{ backgroundImage: `url(${corousal1})` }}
            >
              <div className="carousel-caption container">
                <div className="row">
                  <div className="col-md-7 col-sm-12 col-xs-12">
                    <h1>We Are Cosmix</h1>
                    <h2>Creative Themes</h2>
                    <p>
                      Cosmix A One Page Parallax, HTML5 and Responsive Template
                      suitable for any creative business agency. Multiple pages
                      also included in this theme with lots of CSS and JQuery
                      animations
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: `url(${corousal2})` }}
            >
              <div className="carousel-caption container">
                <div className="row">
                  <div className="col-md-7 col-sm-12 col-xs-12">
                    <h1>We Are Cosmix</h1>
                    <h2>Creative Themes</h2>
                    <p>
                      Cosmix – A One Page Parallax, HTML5 and Responsive
                      Template suitable for any creative business agency.
                      Multiple pages layouts also in this theme with lots of CSS
                      and JQuery animations
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="item active left"
              style={{ backgroundImage: `url(${corousal3})` }}
            >
              <div className="carousel-caption container">
                <div className="row">
                  <div className="col-md-7 col-sm-12 col-xs-12">
                    <h1>We Are Cosmix</h1>
                    <h2>Creative Themes</h2>
                    <p>
                      Cosmix – A One Page Parallax, HTML5 and Responsive
                      Template suitable for any creative business agency.
                      Multiple page also included in this theme with lots of CSS
                      and JQuery animations
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="home-carousel-left"
              href="#home-carousel"
              data-slide="prev"
            >
              <i className="fa fa-angle-left"></i>
            </a>{" "}
            <a
              className="home-carousel-right"
              href="#home-carousel"
              data-slide="next"
            >
              <i className="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
