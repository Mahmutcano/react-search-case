import React from 'react'
import "./style/add.scss";
import tesodev from "../../asset/tesodev.jpg";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";


const addForm = () => {
  return (
    <div>
      <div className="header-form">
        <div className="logo">
        <Link to="/"><img src={tesodev} alt="tesodev" width={278} height={115} /></Link>
          <span>
            {" "}
            <Link className="link-form" to="/">
              <BiArrowBack/> Page Of Home
            </Link>
          </span>
        </div>
            <form className="form">
                <label className="label-form">Name Surname<br/><input className="input-form" /></label>
                <label className="label-form">Country <br/><input className="input-form" placeholder="Enter an e-mail(abc@xyz.com)"/></label>
                <label className="label-form">City <br/><input className="input-form" /></label>
                <label className="label-form">Email <br/><input className="input-form" /></label>
                <button className="btn-form" type="submit">ADD</button>
            </form>
      </div>
    </div>
  )
}

export default addForm