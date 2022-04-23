import React from "react";
import "./style/add.scss";



const addForm = () => {
  return (
    <div>
      <div className="header-form">
        <form className="form">
          <label className="label-form">
            Name Surname
            <br />
            <input className="input-form" />
          </label>
          <label className="label-form">
            Country <br />
            <input
              className="input-form"
              placeholder="Enter an e-mail(abc@xyz.com)"
            />
          </label>
          <label className="label-form">
            City <br />
            <input className="input-form" />
          </label>
          <label className="label-form">
            Email <br />
            <input className="input-form" />
          </label>
          <button className="btn-form" type="submit">
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default addForm;
