import React, { useState } from "react";
import BreadCrumbs from "../Components/BreadCrumbs/BreadCrumbs";
import CoursePagination from "../Components/Courses/CoursePagination";
import CoursesSidebar from "../Components/CoursesSidebar/CoursesSidebar";
import "../Components/CoursesSidebar/CoursesSidebar.css";
import "./Courses.css";

//mycode
const Service1 = [
  {
    id: 1,
    img: "./../../public/assetsProject/imges/card(6).png",
    note: "Photography",
    detail: " Determined-Poitras",
    title: "Create an lms website with learnPress",
    time: "2Weeks",
    number: "156 Students",
    levels: "All Levels",
    lessons: "20 Lessons",
    price: "29.0",
    viewMore: "view more",
    category: "Educate",
    Review: "one",
    Level: "Expert",
    Instructors: "KennyWhite",
    Price: "Free",
  },
  {
    id: 2,
    img: "./../../public/assetsProject/imges/card(1).png",
    note: "Photography",
    detail: " Determined-Poitras",
    title: "design a website with thimPress",
    time: "2Weeks",
    number: "156 Students",
    levels: "All Levels",
    lessons: "20 Lessons",
    price: "29.0",
    viewMore: "view more",
    category: "Shop",
    Review: "three",
    Level: "Expert",
    Instructors: "JohnDoe",
    Price: "Free",
  },
  {
    id: 3,
    img: "./../../public/assetsProject/imges/card(2).png",
    note: "Photography",
    detail: " Determined-Poitras",
    title: "Create an lms website with learnPress",
    time: "2Weeks",
    number: "156 Students",
    levels: "All Levels",
    lessons: "20 Lessons",
    price: "29.0",
    viewMore: "view more",
    category: "Commercial",
    Review: "five",
    Level: "Beginner",
    Instructors: "KennyWhite",
    Price: "Paid",
  },
  {
    id: 4,
    img: "./../../public/assetsProject/imges/card(3).png",
    note: "Photography",
    detail: " Determined-Poitras",
    title: "Create an lms website with learnPress",
    time: "2Weeks",
    number: "156 Students",
    levels: "All Levels",
    lessons: "20 Lessons",
    price: "29.0",
    viewMore: "view more",
    category: "Commercial",
    Review: "one",
    Level: "Intermediate",
    Instructors: "JohnDoe",
    Price: "Paid",
  },
];

export default function Courses() {
  /*لاتعدلي ----------------------------------------- */
  const [searchBox, setSearchBox] = useState("");

  const handleSearchChange = (value) => {
    setSearchBox(value);
  };
  /*-------------------------------------------------------------------- */

  // عدلي حسب الفلاتر يلي بال saidbar______________________________________________________________________________________________
  const [selectedFilters, setSelectedFilters] = useState({
    Commercial: false,
    Office: false,
    Shop: false,
    Educate: false,
    Academy: false,
    family: false,
    Studio: false,
    University: false,
    KennyWhite: false,
    JohnDoe: false,
    All: false,
    Free: false,
    Paid: false,
    five: false,
    four: false,
    three: false,
    two: false,
    one: false,
    "All levels": false,
    Beginner: false,
    Intermediate: false,
    Expert: false,
  });

  const filteredRecords = Service1.filter((val) => {
    const matchesCategory =
      (!selectedFilters.Commercial &&
        !selectedFilters.Office &&
        !selectedFilters.University &&
        !selectedFilters.Studio &&
        !selectedFilters.family &&
        !selectedFilters.Academy &&
        !selectedFilters.Educate &&
        !selectedFilters.Shop) ||
      selectedFilters[val.category];
    const matchesReview =
      (!selectedFilters.five &&
        !selectedFilters.four &&
        !selectedFilters.three &&
        !selectedFilters.two &&
        !selectedFilters.one) ||
      selectedFilters[val.Review.toLowerCase()];
    const matchesLevel =
      (!selectedFilters.Beginner &&
        !selectedFilters.Intermediate &&
        !selectedFilters.Expert) ||
      selectedFilters[val.Level];
    const matchesInstructors =
      (!selectedFilters.KennyWhite && !selectedFilters.JohnDoe) ||
      selectedFilters[val.Instructors];
    const matchesPrice =
      (!selectedFilters.Free && !selectedFilters.Paid) ||
      selectedFilters[val.Price];

    return (
      matchesCategory &&
      matchesInstructors &&
      matchesPrice &&
      matchesReview &&
      matchesLevel
    );
    //_____________________________________________________________________________________________________________________________________
  }).filter((val) => {
    /* من هاد السطر
     */ if (searchBox === "") {
      return val;
    } else if (val.title.toLowerCase().includes(searchBox.toLowerCase())) {
      return val;
    }
    return null;
  }); /* لهاد لا تعدلي */

  return (
    <>
      <BreadCrumbs />
      <div className="Courses Project-Container">
        <CoursePagination
          searchBox={searchBox}
          onSearchChange={handleSearchChange}
          items={filteredRecords}
          x={true}
        />
        <CoursesSidebar
          filters={selectedFilters}
          onFilterChange={setSelectedFilters}
        />
        
      </div>
    </>
  );
}
