import React from "react";
import Port1 from "../../utils/images/portfolio/01.jpg";
import Port2 from "../../utils/images/portfolio/02.jpg";
import Port3 from "../../utils/images/portfolio/03.jpg";
import Port4 from "../../utils/images/portfolio/04.jpg";
import Port5 from "../../utils/images/portfolio/05.jpg";
import Port6 from "../../utils/images/portfolio/06.jpg";

const Portfolio = () => {
  return (
    <div>
      <section id="portfolio">
        <div className="container">
          <div className="col-md-8 col-md-offset-2">
            <div className="heading">
              <h2>
                AWESOME FEATUR<span>ES</span>
              </h2>
              <div className="line"></div>
              <p>
                <span>
                  <strong>L</strong>
                </span>
                orem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad
                minim veniam
              </p>
            </div>
          </div>
          <div className="text-center">
            <ul className="portfolio-filter">
              <li>
                <a className="active" href="javascript:void(0);" data-filter="*">
                  All Works
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" data-filter=".creative">
                  Creative
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" data-filter=".corporate">
                  Corporate
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" data-filter=".portfolio">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
          <div
            className="portfolio-items isotope"
            // style="position: relative; overflow: hidden; height: 705px;"
            style={{position:"relative", overflow:"hidden", height:"705px"}}
          >
            <div
              className="col-md-4 col-sm-6 col-xs-12 portfolio-item creative isotope-item"
            //   style="position: absolute; left: 0px; top: 0px; transform: translate3d(0px, 0px, 0px);"
            style={{position: "absolute", left:"0px", top:"0px", transform:"translate3d(0px, 0px, 0px)"}}
            >
              <div className="portfolio-item-inner">
                <img
                  className="img-responsive"
                  src={Port1}
                  alt="website template image"
                />
                <div className="portfolio-info">
                  <a
                    className="preview"
                    href={Port1}
                    data-rel="prettyPhoto"
                  >
                    <i className="fa fa-plus-circle"></i>
                  </a>
                  <h6>ITEM-1</h6>
                  <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-6 col-xs-12 portfolio-item corporate portfolio isotope-item"
            //   style="position: absolute; left: 0px; top: 0px; transform: translate3d(360px, 0px, 0px);"
              style={{position: "absolute", left:"0px", top:"0px", transform:"translate3d(380px, 0px, 0px)"}}
            >
              <div className="portfolio-item-inner">
                <img
                  className="img-responsive"
                  src={Port2}
                  alt="website template image"
                />
                <div className="portfolio-info">
                  <a
                    className="preview"
                    href={Port2}
                    data-rel="prettyPhoto"
                  >
                    <i className="fa fa-plus-circle"></i>
                  </a>
                  <h6>ITEM-2</h6>
                  <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-6 col-xs-12 portfolio-item creative isotope-item"
            //   style="position: absolute; left: 0px; top: 0px; transform: translate3d(0px, 235px, 0px);"
            style={{position: "absolute", left:"0px", top:"0px", transform:"translate3d(760px, 0px, 0px)"}}
            >
              <div className="portfolio-item-inner">
                <img
                  className="img-responsive"
                  src={Port3}
                  alt="website template image"
                />
                <div className="portfolio-info">
                  <a
                    className="preview"
                    href={Port3}
                    data-rel="prettyPhoto"
                  >
                    <i className="fa fa-plus-circle"></i>
                  </a>
                  <h6>ITEM-3</h6>
                  <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-6 col-xs-12 portfolio-item corporate isotope-item"
            //   style="position: absolute; left: 0px; top: 0px; transform: translate3d(360px, 235px, 0px);"
            style={{position: "absolute", left:"0px", top:"0px", transform:"translate3d(0px, 248px, 0px)"}}
            
            >
              <div className="portfolio-item-inner">
                <img
                  className="img-responsive"
                  src={Port4}
                  alt="website template image"
                />
                <div className="portfolio-info">
                  <a
                    className="preview"
                    href={Port4}
                    data-rel="prettyPhoto"
                  >
                    <i className="fa fa-plus-circle"></i>
                  </a>
                  <h6>ITEM-4</h6>
                  <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-6 col-xs-12 portfolio-item creative portfolio isotope-item"
            //   style="position: absolute; left: 0px; top: 0px; transform: translate3d(0px, 470px, 0px);"
            style={{position: "absolute", left:"0px", top:"0px", transform:"translate3d(380px, 248px, 0px)"}}
            >
              <div className="portfolio-item-inner">
                <img
                  className="img-responsive"
                  src={Port5}
                  alt="website template image"
                />
                <div className="portfolio-info">
                  <a
                    className="preview"
                    href={Port5}
                    data-rel="prettyPhoto"
                  >
                    <i className="fa fa-plus-circle"></i>
                  </a>
                  <h6>ITEM-5</h6>
                  <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 col-sm-6 col-xs-12 portfolio-item corporate isotope-item"
            //   style="position: absolute; left: 0px; top: 0px; transform: translate3d(360px, 470px, 0px);"
              style={{position: "absolute", left:"0px", top:"0px", transform:"translate3d(760px, 248px, 0px)"}}
            >
              <div className="portfolio-item-inner">
                <img
                  className="img-responsive"
                  src={Port6}
                  alt="website template image"
                />
                <div className="portfolio-info">
                  <a
                    className="preview"
                    href={Port6}
                    data-rel="prettyPhoto"
                  >
                    <i className="fa fa-plus-circle"></i>
                  </a>
                  <h6>ITEM-6</h6>
                  <p>Lorem Ipsum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
