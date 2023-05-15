import React from "react";

const TeamCard = ({img, name, about}) => {
  return (
    <div
              className="col-md-3 col-sm-6 col-xs-12 team-main-sec wow slideInUp"
              data-wow-duration="1s"
              data-wow-delay=".2s"
            >
    <div className="team-sec">
      <div className="team-img">
        <img
          src={img}
          className="img-responsive"
          alt="website template image"
        />
        <div className="team-desc">
          <h5>{name}</h5>
          <p>
            {about}
          </p>
          <ul className="team-social-icon">
            <li>
              <a
                href="https://www.free-css.com/free-css-templates"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Facebook"
              >
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.free-css.com/free-css-templates"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Twitter"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.free-css.com/free-css-templates"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Pinterest"
              >
                <i className="fa fa-pinterest-p"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.free-css.com/free-css-templates"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Instagram"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.free-css.com/free-css-templates"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Google-plus"
              >
                <i className="fa fa-google-plus"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TeamCard;
