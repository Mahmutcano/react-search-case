import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import tesodev from "../../asset/tesodev.jpg";

const HeaderAdd = () => {
  return (
    <div>
      <div className="header-form">
        <div className="logo">
          <Link to="/">
            <img src={tesodev} alt="tesodev" width={278} height={115} />
          </Link>
          <span>
            {" "}
            <Link className="link-form" to="/">
              <BiArrowBack /> Page Of Home
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderAdd;
