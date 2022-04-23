import React from "react";
import tesodev from "../../asset/tesodev.jpg";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";


const ListPageHeader = () => {
  return (
    <div className="tesodev-logo">
      <Link to="/"  style={{ textDecoration: 'none' }}>
        <img src={tesodev} alt="tesodev" width={149} height={63} />
        <BiArrowBack/>
        <span style={{color: "black"}}>Page Of Home</span>
      </Link>
    </div>
  );
};

export default ListPageHeader;
