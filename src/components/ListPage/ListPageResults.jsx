import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchInputValue } from "../../redux/slices/SearchSlice";

const ListPageResults = () => {
  const [pageNumber, setpageNumber] = useState(1);
  const [value, setvalue] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.search.filterData);
  const buttonNumber = useSelector((state) => state.search.pageButtonsCount);
  const errorTextCounter = useSelector(
    (state) => state.search.errorTextCounter
  );

  const searchButton = () => {
    if (value !== "") {
      dispatch(searchInputValue(value));
    }
    setpageNumber(1);
    setvalue("");
  };

  return (
    <>
      <div className="search-bar-listpage">
        <input
          className={
            data.length !== 0
              ? "search-input"
              : errorTextCounter > 0
              ? "search-input-error"
              : "search-input"
          }
          type="text"
          onChange={(e) => setvalue(e.target.value)}
        />
        <button onClick={() => searchButton()}>Search</button>
      </div>
      {data.length !== 0 ? (
        <div className="list-page-results">
          <div className="list-page-list">
            {data
              .slice(6 * pageNumber - 6, 6 * pageNumber)
              .map((person, index) => (
                <div key={index} className="list">
                  <div className="list-div">
                    <div className="search-left">
                      <p>{`${person[4]} - ${person[5]}`}</p>
                      <p className="name-year">{`${
                        person[0]
                      } - ${person[3].slice(6)}`}</p>
                    </div>
                    <div className="search-right">
                      <p>E-mail: {person[2]}</p>
                    </div>
                  </div>
                </div>
              ))}

            <div className="list-page-button">
              {pageNumber === 1 ? (
                <button
                  disabled={true}
                  onClick={() => setpageNumber(pageNumber - 1)}
                  className="previous-button"
                >
                  Previous
                </button>
              ) : (
                <button
                  onClick={() => setpageNumber(pageNumber - 1)}
                  className="previous-button"
                >
                  Previous
                </button>
              )}
              {buttonNumber.map((num, index) => (
                <button
                  className={
                    pageNumber - 1 === index ? "active-button" : "number-button"
                  }
                  onClick={() => setpageNumber(index + 1)}
                  key={index}
                >
                  {index + 1}
                </button>
              ))}
              {pageNumber === buttonNumber.length ? (
                <button
                  disabled={true}
                  onClick={() => setpageNumber(pageNumber + 1)}
                  className="next-button"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={() => setpageNumber(pageNumber + 1)}
                  className="next-button"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      ) : errorTextCounter > 0 ? (
        <p className="error-text">Error Text</p>
      ) : null}
    </>
  );
};

export default ListPageResults;
