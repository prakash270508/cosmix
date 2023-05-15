import React from "react";
import Log2 from "../../utils/images/logo/02.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const Navbar = () => {
  return (
    <header id="menu">
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#menu">
                <img src={Log2} height={"40"} alt="website template image" />
              </a>
            </div>
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav">
                <li className="active">
                  <Link className="scroll" to={"/"}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="scroll" to={"/about"}>
                    About
                  </Link>
                </li>
                <li>
                  <Link className="scroll" to={"/service"}>
                    Service
                  </Link>
                </li>
                <li>
                  <Link className="scroll" to={"/pricing"}>
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link className="scroll" to={"/team"}>
                    Team
                  </Link>
                </li>
                <li>
                  <Link className="scroll" to={"/blog"}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="scroll" to={"/contact-us"}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="scroll" to={"/search"}>
                    <FaSearch />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
