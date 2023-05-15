import React, { useEffect } from "react";
import Home from "./Home";

export default function Pricing() {
  useEffect(()=>{
    const scrollDistance = window.innerHeight * 0.93;
    window.scrollTo({
      top: scrollDistance,
      behavior: "smooth",
    });
  },[])
  return (
    <div>
      <Home />
    <section id="pricing" className="scroll-section">
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <div className="heading">
            <h2>
              PRICE PACKAG<span>ES</span>
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
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <div
              className="wow zoomIn"
              data-wow-duration="400ms"
              data-wow-delay="0ms"
            //   style="visibility: visible; animation-duration: 400ms; animation-delay: 0ms; animation-name: zoomIn;"
            style={{visibility:"visible", animationDuration:"400ms", animationDelay:"0ms", animationName:"zoomIn"}}
            >
              <ul className="pricing">
                <li className="plan-header">
                  <div className="price-duration">
                    <div className="price">$39</div>
                    <div className="duration">per month</div>
                  </div>
                  <div className="plan-name">Starter</div>
                </li>
                <li>
                  <strong>1</strong> DOMAIN
                </li>
                <li>
                  <strong>100GB</strong> DISK SPACE
                </li>
                <li>
                  <strong>UNLIMITED</strong> BANDWIDTH
                </li>
                <li>SHARED SSL CERTIFICATE</li>
                <li>
                  <strong>10</strong> EMAIL ADDRESS
                </li>
                <li>
                  <strong>24/7</strong> SUPPORT
                </li>
                <li>
                  <a
                    className="btn-order"
                    href="https://www.free-css.com/free-css-templates"
                  >
                    Order Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div
              className="wow zoomIn"
              data-wow-duration="400ms"
              data-wow-delay="200ms"
            //   style="visibility: visible; animation-duration: 400ms; animation-delay: 200ms; animation-name: zoomIn;"
            style={{visibility:"visible", animationDuration:"400ms", animationDelay:"200ms", animationName:"zoomIn"}}
            >
              <ul className="pricing">
                <li className="plan-header">
                  <div className="price-duration">
                    <div className="price">$69</div>
                    <div className="duration">per month</div>
                  </div>
                  <div className="plan-name">Business</div>
                </li>
                <li>
                  <strong>3</strong> DOMAIN
                </li>
                <li>
                  <strong>300GB</strong> DISK SPACE
                </li>
                <li>
                  <strong>UNLIMITED</strong> BANDWIDTH
                </li>
                <li>SHARED SSL CERTIFICATE</li>
                <li>
                  <strong>30</strong> EMAIL ADDRESS
                </li>
                <li>
                  <strong>24/7</strong> SUPPORT
                </li>
                <li>
                  <a
                    className="btn-order"
                    href="https://www.free-css.com/free-css-templates"
                  >
                    Order Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div
              className="wow zoomIn"
              data-wow-duration="400ms"
              data-wow-delay="400ms"
            //   style="visibility: visible; animation-duration: 400ms; animation-delay: 400ms; animation-name: zoomIn;"
            style={{visibility:"visible", animationDuration:"400ms", animationDelay:"400ms", animationName:"zoomIn"}}
            >
              <ul className="pricing">
                <li className="plan-header">
                  <div className="price-duration">
                    <div className="price">$99</div>
                    <div className="duration">per month</div>
                  </div>
                  <div className="plan-name">Pro</div>
                </li>
                <li>
                  <strong>5</strong> DOMAIN
                </li>
                <li>
                  <strong>500GB</strong> DISK SPACE
                </li>
                <li>
                  <strong>UNLIMITED</strong> BANDWIDTH
                </li>
                <li>SHARED SSL CERTIFICATE</li>
                <li>
                  <strong>50</strong> EMAIL ADDRESS
                </li>
                <li>
                  <strong>24/7</strong> SUPPORT
                </li>
                <li>
                  <a
                    className="btn-order"
                    href="https://www.free-css.com/free-css-templates"
                  >
                    Order Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div
              className="wow zoomIn"
              data-wow-duration="400ms"
              data-wow-delay="600ms"
            //   style="visibility: visible; animation-duration: 400ms; animation-delay: 600ms; animation-name: zoomIn;"
            style={{visibility:"visible", animationDuration:"400ms", animationDelay:"600ms", animationName:"zoomIn"}}
            >
              <ul className="pricing">
                <li className="plan-header">
                  <div className="price-duration">
                    <div className="price">$199</div>
                    <div className="duration">per month</div>
                  </div>
                  <div className="plan-name">Ultra</div>
                </li>
                <li>
                  <strong>10</strong> DOMAIN
                </li>
                <li>
                  <strong>1000GB</strong> DISK SPACE
                </li>
                <li>
                  <strong>UNLIMITED</strong> BANDWIDTH
                </li>
                <li>SHARED SSL CERTIFICATE</li>
                <li>
                  <strong>100</strong> EMAIL ADDRESS
                </li>
                <li>
                  <strong>24/7</strong> SUPPORT
                </li>
                <li>
                  <a
                    className="btn-order"
                    href="https://www.free-css.com/free-css-templates"
                  >
                    Order Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>      
    </div>
  );
}
