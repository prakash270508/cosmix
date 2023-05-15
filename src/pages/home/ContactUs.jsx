import React, { useEffect } from "react";
import Home from "./Home";

const ContactUs = () => {
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
      <section id="contact">
        <div className="container">
          <div className="col-md-8 col-md-offset-2">
            <div className="heading">
              <h2>
                CONTACT <span>US</span>
              </h2>
              <div className="line"></div>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: "7vw" }}>
            <div className="col-md-6 col-sm-6 contact-sec-1">
              <h4>
                CONTACT IN<span>FO</span>
              </h4>
              <ul className="contact-form">
                <h5>
                  <b>Delhi Office</b>
                </h5>
                <li>
                  <i className="fa fa-map-marker"></i>
                  <h6>
                    <strong>Address:</strong> 301, Pearls Best Heights-1, Netaji
                    Subhash Place, Pitampura, Delhi - 110034
                  </h6>
                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  <h6>
                    <strong>Mail Us:</strong>{" "}
                    <a href="https://www.free-css.com/free-css-templates">
                      info@legalintelligentsearchengine.com
                    </a>
                  </h6>
                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  <h6>
                    <strong>Mail Us:</strong>{" "}
                    <a href="https://www.free-css.com/free-css-templates">
                      raj@legalintelligentsearchengine.com
                    </a>
                  </h6>
                </li>
                <li>
                  <i className="fa fa-phone"></i>
                  <h6>
                    <strong>Phone:</strong> +91 11 4100 8002
                  </h6>
                </li>
                <li>
                  <i className="fa fa-phone"></i>
                  <h6>
                    <strong>Phone:</strong> +91 991 009 8002
                  </h6>
                </li>
              </ul>
              <ul className="contact-form">
                <h5>
                  <b>Dubai Office</b>
                </h5>
                <li>
                  <i className="fa fa-map-marker"></i>
                  <h6>
                    <strong>Address:</strong> P.O. Box No. 3718 Ajman, United
                    Arab Emirates (UAE)
                  </h6>
                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  <h6>
                    <strong>Mail Us:</strong>{" "}
                    <a href="https://www.free-css.com/free-css-templates">
                      info@legalintelligentsearchengine.com
                    </a>
                  </h6>
                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  <h6>
                    <strong>Mail Us:</strong>{" "}
                    <a href="https://www.free-css.com/free-css-templates">
                      raj@legalintelligentsearchengine.com
                    </a>
                  </h6>
                </li>
                <li>
                  <i className="fa fa-phone"></i>
                  <h6>
                    <strong>Phone:</strong>
                    +91 11 4100 8002
                  </h6>
                </li>
                <li>
                  <i className="fa fa-phone"></i>
                  <h6>
                    <strong>Phone:</strong> +91 991 009 8002
                  </h6>
                </li>
              </ul>
              <ul className="contact-form">
                <h5>
                  <b>London Office</b>
                </h5>
                <li>
                  <i className="fa fa-map-marker"></i>
                  <h6>
                    <strong>Address:</strong> 82, Clenshaw Path Basildon Essex SS142FP United Kingdom (UK)
                  </h6>
                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  <h6>
                    <strong>Mail Us:</strong>{" "}
                    <a href="https://www.free-css.com/free-css-templates">
                    info@legalintelligentsearchengine.com
                    </a>
                  </h6>
                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  <h6>
                    <strong>Mail Us:</strong>{" "}
                    <a href="https://www.free-css.com/free-css-templates">
                    raj@legalintelligentsearchengine.com
                    </a>
                  </h6>
                </li>
                <li>
                  <i className="fa fa-phone"></i>
                  <h6>
                    <strong>Phone:</strong> +91 11 4100 8002
                  </h6>
                </li>
                <li>
                  <i className="fa fa-phone"></i>
                  <h6>
                    <strong>Phone:</strong> +91 991 009 8002
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-6">
              <form
                id="main-contact-form"
                name="contact-form"
                method="post"
                action="#"
              >
                <div
                  className="row wow fadeInDown"
                  data-wow-duration="1000ms"
                  data-wow-delay="300ms"
                >
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        required=""
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Enter your message"
                    required=""
                  ></textarea>
                </div>
                <a
                  className="btn-send col-md-12 col-sm-12 col-xs-12"
                  href="https://www.free-css.com/free-css-templates"
                >
                  Send Now
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
