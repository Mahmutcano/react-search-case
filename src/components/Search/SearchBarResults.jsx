import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import dataJson from "../../json/mockData.json";

const SearchBarResults = () => {
  const data = useSelector((state) => state.search.filterData);
  const errorTextCounter = useSelector(
    (state) => state.search.errorTextCounter
  );

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(dataJson.data));
  }, []);

  return (
    <>
      <div className="search-results">
        {data.length !== 0 ? (
          <div className="search-list">
            {data.slice(0, 3).map((person, index) => (
              <div className="search-div" key={index}>
                <div className="list-div">
                  <div className="search-left">
                    <p>{`${person[4]} - ${person[5]}`}</p>
                    <p className="name-year">{`${person[0]} - ${person[3].slice(
                      6
                    )}`}</p>
                  </div>
                  <div className="search-right">
                    <p>E-mail: {person[2]}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="show-more">
              <Link to="/list-page">
                <button className="show-more-button">Show more...</button>
              </Link>
            </div>
          </div>
        ) : errorTextCounter > 0 ? (
          <div className="error-div">
            <p className="error-text"> Error Text</p>
          </div>
        ) : null}

        <button className="hidden-button">button</button>
      </div>
    </>
  );
};

export default SearchBarResults;
