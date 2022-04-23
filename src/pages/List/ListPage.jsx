import React from "react";
import ListPageHeader from "../../components/ListPage/ListPageHeader";
import ListPageResults from "../../components/ListPage/ListPageResults";

function ListPage() {
  return (
    <div className="list-page">
      <ListPageHeader />
      <ListPageResults />
    </div>
  );
}

export default ListPage;
