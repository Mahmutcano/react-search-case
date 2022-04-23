import React from "react";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/Search/SearchBar";
import SearchBarResults from "../../components/Search/SearchBarResults";
import "../../App.css";

function Home() {

  return (
    <div className="home">
      <Header />
      <SearchBar />
      <SearchBarResults />
    </div>
  );
}

export default Home;
