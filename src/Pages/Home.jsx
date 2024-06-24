import { useState } from "react"

// for css
import "./../index.css"

// for components
import FeaturedCoursesCards from '../Components/FeaturedCoursesCards/FeaturedCorsesCards'
import ExploreCourses from "../Components/ExploreCourses/ExploreCourses"
import HomePageHero from '../Components/HomePageHero/HomePageHero'
import CategoriesCards from "../Components/CategoriesCards/CategoriesCards"
import CounterCards from "../Components/CounterCards/CounterCards"
import GrowSkills from "../Components/GrowSkills/GrowSkills"
import ExploreCourses2 from "../Components/ExploreCourses2/ExploreCourses2"
import StudentsFeedback from "../Components/StudentsFeedback/StudentsFeedback"
import ArticlesCards from "../Components/ArticlesCards/ArticlesCards"

// for images
import featuredcard1 from "./../../public/assetsProject/imges/card(1).png";
import featuredcard2 from "./../../public/assetsProject/imges/card(2).png";
import featuredcard3 from "./../../public/assetsProject/imges/card(3).png";
import featuredcard4 from "./../../public/assetsProject/imges/card(4).png";
import featuredcard5 from "./../../public/assetsProject/imges/card(5).png";
import featuredcard6 from "./../../public/assetsProject/imges/card(6).png";
import StartAcademy from "../Components/StartAcademy/StartAcademy"


export default function Home() {
  const [FeaturedCards] = useState([
    {
      id: 1,
      img: featuredcard6,
      note: "Photography",
      detail: " Determined-Poitras",
      title: "Create an lms website with learnPress",
      time: "2Weeks",
      number: "156 Students",
      levels: "All Levels",
      lessons: "20 Lessons",
      price: "29.0",
      viewMore: "view more",
    },
    {
      id: 2,
      img: featuredcard1,
      note: "Photography",
      detail: " Determined-Poitras",
      title: "design a website with thimPress",
      time: "2Weeks",
      number: "156 Students",
      levels: "All Levels",
      lessons: "20 Lessons",
      price: "29.0",
      viewMore: "view more",
    },
    {
        id: 3,
        img: featuredcard2,
        note: "Photography",
        detail: " Determined-Poitras",
        title: "Create an lms website with learnPress",
        time: "2Weeks",
        number: "156 Students",
        levels: "All Levels",
        lessons: "20 Lessons",
        price: "29.0",
        viewMore: "view more",
      },
      {
        id: 4,
        img: featuredcard3,
        note: "Photography",
        detail: " Determined-Poitras",
        title: "Create an lms website with learnPress",
        time: "2Weeks",
        number: "156 Students",
        levels: "All Levels",
        lessons: "20 Lessons",
        price: "29.0",
        viewMore: "view more",
      },
      {
        id: 5,
        img: featuredcard4,
        note: "Photography",
        detail: " Determined-Poitras",
        title: "Create an lms website with learnPress",
        time: "2Weeks",
        number: "156 Students",
        levels: "All Levels",
        lessons: "20 Lessons",
        price: "29.0",
        viewMore: "view more",
      },
      {
        id: 6,
        img: featuredcard5,
        note: "Photography",
        detail: " Determined-Poitras",
        title: "Create an lms website with learnPress",
        time: "2Weeks",
        number: "156 Students",
        levels: "All Levels",
        lessons: "20 Lessons",
        price: "29.0",
        viewMore: "view more",
      },
  ]);

  return (
    <>
      <HomePageHero />
      <CategoriesCards />
      <FeaturedCoursesCards FeaturedCards={FeaturedCards} />
      <CounterCards /> 
      <ExploreCourses />
      <GrowSkills />
      <ExploreCourses2 />
      <StudentsFeedback />
      <StartAcademy />
      <ArticlesCards />
    </>
  )
}
