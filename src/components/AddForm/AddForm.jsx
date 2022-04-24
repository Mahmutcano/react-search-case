import React from "react";
import "./style/add.scss";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import dataJson from "../../json/mockData.json";


const addForm = () => {
  return (
    <div>
      <div className="header-form">
        <Formik
          initialValues={{
            name: "",
            company: "",
            email: "",
            date: "",
            country: "",
            city: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(4, "Must be 4 characters or more")
              .max(60, "Must be 15 characters or less")
              .required("Required"),
            country: Yup.string()
              .min(2, "Must be 2 characters or more")
              .max(60, "Must be 20 characters or less")
              .required("Required"),
            city: Yup.string()
              .min(2, "Must be 2 characters or more")
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
          })}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          {({ handleSubmit, handleChange, isValid }) => (
            <form className="form" onSubmit={handleSubmit}>
              <label htmlFor="name" className="label-form">
                Name Surname
                <br />
                <input
                  name="name"
                  className="input-form"
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="name"
                  render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
                />
              </label>

              <label htmlFor="company" className="label-form">
                Company
                <br />
                <input
                  name="company"
                  className="input-form"
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="name"
                  render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
                />
              </label>

              <label htmlFor="email" className="label-form">
                Email <br />
                <input
                  name="email"
                  className="input-form"
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="email"
                  render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
                />
              </label>

              <label htmlFor="date" className="label-form">
                Date <br />
                <input
                  name="date"
                  className="input-form"
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="email"
                  render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
                />
              </label>
              <label htmlFor="country" className="label-form">
                Country <br />
                <input
                  name="country"
                  className="input-form"
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="country"
                  render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
                />
              </label>

              <label htmlFor="city" className="label-form">
                City <br />
                <input
                  name="city"
                  className="input-form"
                  onChange={handleChange}
                />
                <ErrorMessage
                  name="city"
                  render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
                />
              </label>

              <button className="btn-form" type="submit" disabled={!isValid}>
                ADD
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default addForm;
