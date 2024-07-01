import "./../index.css"
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import CoursePagination from "../Components/Courses/CoursePagination"
import React, { useState } from 'react';

const Service1 = [
  {
  id: 1,
      img: './../../public/assetsProject/imges/card(6).png',
      note: "Photography",
      detail: " Determined-Poitras",
      title: "Create an lms website with learnPress",
      time: "2Weeks",
      number: "156 Students",
      levels: "All Levels",
      lessons: "20 Lessons",
      price: "29.0",
    category: "Educate",
    Review: "one",
    Level: "Expert",
    Instructors: "KennyWhite",
    Price: "Free",

  },
  {
    id: 2,
      img: './../../public/assetsProject/imges/card(1).png',
      note: "Photography",
      detail: " Determined-Poitras",
      title: "design a website with thimPress",
      time: "2Weeks",
      number: "156 Students",
      levels: "All Levels",
      lessons: "20 Lessons",
      price: "29.0",
    category: "Shop",
    Review: "three",
    Level: "Expert",
    Instructors: "JohnDoe",
    Price: "Free",

  },
  {
    id: 3,
    img: './../../public/assetsProject/imges/card(2).png',
    note: "Photography",
    detail: " Determined-Poitras",
    title: "Create an lms website with learnPress",
    time: "2Weeks",
    number: "156 Students",
    levels: "All Levels",
    lessons: "20 Lessons",
    price: "29.0",

    category: "Commercial",
    Review: "five",
    Level: "Beginner",
    Instructors: "KennyWhite",
    Price: "Paid",

  },
  {
    id: 4,
        img: './../../public/assetsProject/imges/card(3).png',
        note: "Photography",
        detail: " Determined-Poitras",
        title: "Create an lms website with learnPress",
        time: "2Weeks",
        number: "156 Students",
        levels: "All Levels",
        lessons: "20 Lessons",
        price: "29.0",
    category: "Commercial",
    Review: "one",
    Level: "Intermediate",
    Instructors: "JohnDoe",
    Price: "Paid",

  }
];


export default function Blog() {
  /*لاتعدلي ----------------------------------------- */
const [searchBox, setSearchBox] = useState("");

const handleSearchChange = (value) => {
  setSearchBox(value);
};
/*-------------------------------------------------------------------- */


// عدلي حسب الفلاتر يلي بال saidbar______________________________________________________________________________________________
const filteredRecords =Service1.filter((val) => {   /* من هاد السطر
 */    if (searchBox === "") {
      return val;
    } else if (val.title.toLowerCase().includes(searchBox.toLowerCase())) {
      return val;
    }
    return null;
  });   /* لهاد لا تعدلي */

  return (
    
    <div >
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
  )

}
