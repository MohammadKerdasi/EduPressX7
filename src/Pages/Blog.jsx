// import React from "react";
import "./../index.css";
import BreadCrumbs from "../Components/BreadCrumbs/BreadCrumbs";

export default function Blog() {

  return (
    <div>
      <BreadCrumbs />
      <div className='Courses Project-Container'>
        <CoursePagination
          searchBox={searchBox}
          onSearchChange={handleSearchChange}
          items={filteredRecords}
           titel="All Courses"
        />
       </div>
    </div>
  );
}
