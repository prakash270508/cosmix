import React, { useEffect } from "react";
import Blog1 from "../../utils/images/blog/1.jpg"
import Blog2 from "../../utils/images/blog/2.jpg"
import Blog3 from "../../utils/images/blog/3.jpg"
import Home from "./Home";

const Blog = () => {
  useEffect(()=>{
    const scrollDistance = window.innerHeight * 2.9;
    window.scrollTo({
      top: scrollDistance,
      behavior: "smooth",
    });
  },[])
  return (
    <div>
      <Home />
    <section id="blog">
      <div className="container">
        <div className="col-md-8 col-md-offset-2">
          <div className="heading">
            <h2>
              LATEST BL<span>OG</span>
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
          <div className="col-md-12">
            <div className="col-md-4 blog-sec">
              <div className="blog-info">
                <img
                  src={Blog1}
                  className="img-responsive"
                  alt="website template image" 
                  />
                <div className="data-meta">
                  <h4>Jan</h4>
                  <strong>10</strong>
                  <br />
                  2045
                </div>
                <a href="https://www.free-css.com/free-css-templates">
                  <h5>Sed ut perspiciatis unde omnis</h5>
                </a>
                <ul className="blog-icon">
                  <li>
                    <i className="fa fa-pencil"></i>
                    <a href="https://www.free-css.com/free-css-templates">
                      <h6>John</h6>
                    </a>
                  </li>
                  <li className="comment">
                    <i className="fa fa-comment"></i>
                    <a href="https://www.free-css.com/free-css-templates">
                      <h6>13</h6>
                    </a>
                  </li>
                </ul>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate.
                </p>
                <a
                  href="https://www.free-css.com/free-css-templates"
                  className="btn-blg"
                  >
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-4 blog-sec">
              <div className="blog-info">
                <img
                  src={Blog2}
                  className="img-responsive"
                  alt="website template image"
                  />
                <div className="data-meta">
                  <h4>Jan</h4>
                  <strong>20</strong>
                  <br />
                  2045
                </div>
                <a href="https://www.free-css.com/free-css-templates">
                  <h5>Sed ut perspiciatis unde omnis</h5>
                </a>
                <ul className="blog-icon">
                  <li>
                    <i className="fa fa-pencil"></i>
                    <a href="https://www.free-css.com/free-css-templates">
                      <h6>Maria</h6>
                    </a>
                  </li>
                  <li className="comment">
                    <i className="fa fa-comment"></i>
                    <a href="https://www.free-css.com/free-css-templates">
                      <h6>04</h6>
                    </a>
                  </li>
                </ul>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate.
                </p>
                <a
                  href="https://www.free-css.com/free-css-templates"
                  className="btn-blg"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-4 blog-sec">
              <div className="blog-info">
                <img
                  src={Blog3}
                  className="img-responsive"
                  alt="website template image"
                  />
                <div className="data-meta">
                  <h4>Jan</h4>
                  <strong>31</strong>
                  <br />
                  2045
                </div>
                <a href="https://www.free-css.com/free-css-templates">
                  <h5>Sed ut perspiciatis unde omnis</h5>
                </a>
                <ul className="blog-icon">
                  <li>
                    <i className="fa fa-pencil"></i>
                    <a href="https://www.free-css.com/free-css-templates">
                      <h6>Bear</h6>
                    </a>
                  </li>
                  <li className="comment">
                    <i className="fa fa-comment"></i>
                    <a href="https://www.free-css.com/free-css-templates">
                      <h6>05</h6>
                    </a>
                  </li>
                </ul>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate.
                </p>
                <a
                  href="https://www.free-css.com/free-css-templates"
                  className="btn-blg"
                  >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
                  </div>
  );
};

export default Blog;
