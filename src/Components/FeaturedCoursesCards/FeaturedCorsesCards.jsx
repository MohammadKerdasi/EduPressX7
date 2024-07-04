import { useState } from "react";

// for css
import "./FeaturedCoursesCards.css";
// for components
import Title from "../Title/Title";
// for images


// import featuredcard1 from "./../../../public/assetsProject/imges/card(1).png";
// import featuredcard2 from "./../../../public/assetsProject/imges/card(2).png";
// import featuredcard3 from "./../../../public/assetsProject/imges/card(3).png";
// import featuredcard4 from "./../../../public/assetsProject/imges/card(4).png";
// import featuredcard5 from "./../../../public/assetsProject/imges/card(5).png";
// import featuredcard6 from "./../../../public/assetsProject/imges/card(6).png";

import graduationHat from "./../../../public/assetsProject/imges/hat.svg"
import clock from "./../../../public/assetsProject/imges/time.svg"
import copyFile from "./../../../public/assetsProject/imges/lesson.svg"
import signal from "./../../../public/assetsProject/imges/leavl.svg"
import { Link } from "react-router-dom";

export default function FeaturedCoursesCards(props) {
  // const [FeaturedCards] = useState([
  //   {
  //     id: 1,
  //     img: featuredcard6,
  //     note: "Photography",
  //     detail: " Determined-Poitras",
  //     title: "Create an lms website with learnPress",
  //     time: "2Weeks",
  //     number: "156 Students",
  //     levels: "All Levels",
  //     lessons: "20 Lessons",
  //     price: "29.0",
  //     viewMore: "view more",
  //   },
  //   {
  //     id: 2,
  //     img: featuredcard1,
  //     note: "Photography",
  //     detail: " Determined-Poitras",
  //     title: "design a website with thimPress",
  //     time: "2Weeks",
  //     number: "156 Students",
  //     levels: "All Levels",
  //     lessons: "20 Lessons",
  //     price: "29.0",
  //     viewMore: "view more",
  //   },
  //   {
  //       id: 3,
  //       img: featuredcard2,
  //       note: "Photography",
  //       detail: " Determined-Poitras",
  //       title: "Create an lms website with learnPress",
  //       time: "2Weeks",
  //       number: "156 Students",
  //       levels: "All Levels",
  //       lessons: "20 Lessons",
  //       price: "29.0",
  //       viewMore: "view more",
  //     },
  //     {
  //       id: 4,
  //       img: featuredcard3,
  //       note: "Photography",
  //       detail: " Determined-Poitras",
  //       title: "Create an lms website with learnPress",
  //       time: "2Weeks",
  //       number: "156 Students",
  //       levels: "All Levels",
  //       lessons: "20 Lessons",
  //       price: "29.0",
  //       viewMore: "view more",
  //     },
  //     {
  //       id: 5,
  //       img: featuredcard4,
  //       note: "Photography",
  //       detail: " Determined-Poitras",
  //       title: "Create an lms website with learnPress",
  //       time: "2Weeks",
  //       number: "156 Students",
  //       levels: "All Levels",
  //       lessons: "20 Lessons",
  //       price: "29.0",
  //       viewMore: "view more",
  //     },
  //     {
  //       id: 6,
  //       img: featuredcard5,
  //       note: "Photography",
  //       detail: " Determined-Poitras",
  //       title: "Create an lms website with learnPress",
  //       time: "2Weeks",
  //       number: "156 Students",
  //       levels: "All Levels",
  //       lessons: "20 Lessons",
  //       price: "29.0",
  //       viewMore: "view more",
  //     },
  // ]);
// const FeaturedCards = props.FeaturedCards;
  return (
      <section className="NA-featuredCards-Section "> 
  {/*       <Title
        header="featured courses"
        desc="Explore our Popular courses"
        btn=" all courses "
        showBtn={true}
      /> */}
        <div className="NA-featuredCards NA-flex">
          {props.FeaturedCards.map((item) => {
            return (
              <div key={item.id} className={props.view || "NA-feature-card"}>
                <div className="NA-feature-card-img">
                  <img src={item.img} alt="features-img" />
                  <p className="NA-card-note">{item.note}</p>
                </div>
                <div className="NA-feature-card-content">
                  <div>
                    <p className="NA-card-desc">by <span>{item.detail}</span></p>
                    <h4 className="NA-card-title">{item.title}</h4>
                    <div className="NA-feature-card-deatails NA-flex">
                      <div>
                      <img src={clock} className="NA-icon" alt="clock-icon" />
                        <span className="NA-icon-desc">{item.time}</span>
                      </div>
                      <div>
                        <img src={graduationHat} className="NA-icon" alt="graduation-hat-icon" />
                        <span className="NA-icon-desc">{item.number}</span>
                      </div>
                      <div className="NA-d-none">
                      <img src={signal} className="NA-icon" alt="signal-icon" />
                        <span className="NA-icon-desc">{item.levels}</span>
                      </div>
                      <div className="NA-d-none">
                      <img src={copyFile} className="NA-icon" alt="copy-file-icon" />
                        <span className="NA-icon-desc">{item.lessons}</span>
                      </div>
                    </div>
                  </div>
                  <div className="NA-card-price NA-flex">
                    <div className="NA-flex">
                      <span> &#36;{item.price}</span>
                      {item.id == 2 ? <p className="discount"> &#36;49.0</p> : <p className="free">Free</p>}
                    </div>
                   
                    <Link to="/CourseSingle">{item.viewMore}</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
  );
}
