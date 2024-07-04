// import React from "react";
import "./../index.css";
import BreadCrumbs from "../Components/BreadCrumbs/BreadCrumbs";
import BlogDtails from "../Components/BlogDetails/BlogDetails";

export default function Blog() {
  return (
    <div>
      <BreadCrumbs />
      <div className="Project-Container">
        {/* <h1>hi from Blog</h1>  */}
        <BlogDtails />
      </div>
    </div>
  );
}
