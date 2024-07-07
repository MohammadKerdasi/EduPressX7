// import React from "react";
import "./../index.css";
import BreadCrumbs from "../Components/BreadCrumbs/BreadCrumbs";
// import ShowFilter from "../Components/ShowFilter/ShowFilter";

import { useState } from "react";
// for images
// import articlecard1 from "./../../../public/assetsProject/imges/card(7).png";
import articlecard2 from "./../../public/assetsProject/imges/card(8).png";
import CoursePagination from "../Components/Courses/CoursePagination";
import FilterBar from "../Components/FilterBar/FilterBar";
import ShowFilter from "../Components/BlogDetails/ShowFilter/ShowFilter";
import ArticleCards from "./../Components/ArticlesCards/ArticlesCards";
import Tags from "../Components/TagsH/Tags";
// import aeticlecard3 from "./../../../public/assetsProject/imges/card(9).png";

const blog = [
  {
    id: 1,
    img: articlecard2,
    title: "Best LearnPress WordPress Theme Collection for 2023",
    date: "Jan 24, 2023",
    decs: "Looking for an amazing & well-functional LearnPress WordPress Theme?...",
  },
  {
    id: 2,
    img: articlecard2,
    title: "lolo LearnPress WordPress Theme Collection for 2023",
    date: "Jan 24, 2023",
    decs: "Looking for an amazing & well-functional LearnPress WordPress Theme?...",
  },
  {
    id: 3,
    img: articlecard2,
    title: "Best LearnPress WordPress Theme Collection for 2023",
    date: "Jan 24, 2023",
    decs: "Looking for an amazing & well-functional LearnPress WordPress Theme?...",
  },
  {
    id: 4,
    img: articlecard2,
    title: "Best LearnPress WordPress Theme Collection for 2023",
    date: "Jan 24, 2023",
    decs: "Looking for an amazing & well-functional LearnPress WordPress Theme?...",
  },
  {
    id: 5,
    img: articlecard2,
    title: "Best LearnPress WordPress Theme Collection for 2023",
    date: "Jan 24, 2023",
    decs: "Looking for an amazing & well-functional LearnPress WordPress Theme?...",
  },
  {
    id: 6,
    img: articlecard2,
    title: "Best LearnPress WordPress Theme Collection for 2023",
    date: "Jan 24, 2023",
    decs: "Looking for an amazing & well-functional LearnPress WordPress Theme?...",
  },
  {
    id: 7,
    img: articlecard2,
    title: "Best LearnPress WordPress Theme Collection for 2023",
    date: "Jan 24, 2023",
    decs: "Looking for an amazing & well-functional LearnPress WordPress Theme?...",
  },
  {
    id: 8,
    img: articlecard2,
    title: "Best LearnPress WordPress Theme Collection for 2023",
    date: "Jan 24, 2023",
    decs: "Looking for an amazing & well-functional LearnPress WordPress Theme?...",
  },
];

// const filteredRecords = blog.filter((val) => {
//   /* من هاد السطر
//    */ if (searchBox === "") {
//     return val;
//   } else if (val.title.toLowerCase().includes(searchBox.toLowerCase())) {
//     return val;
//   }
//   return null;
// }); /* لهاد لا تعدلي */

export default function Blog() {
  const [searchBox, setSearchBox] = useState("");

  const handleSearchChange = (value) => {
    setSearchBox(value);
  };

  return (
    <div className="blog">
      <BreadCrumbs />
      {/* <div><ShowFilter/></div> */}
      <div className="Project-Container d-flex justify-content-space-between">
        <CoursePagination
          searchBox={searchBox}
          onSearchChange={handleSearchChange}
          items={blog}
          title="All Articles"
          x={false}
        />
        <FilterBar/>
        <div className="SHaaban-adding-style-for-tags-area">
        {/* <Tags /> */}
      </div>
      </div>
    </div>
  );
}
