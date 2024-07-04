import { useState } from "react";

// for components
import Title from "../Title/Title";

// for css
import "./ArticlesCards.css"

// for images 
// import articlecard1 from "./../../../public/assetsProject/imges/card(7).png";
// import articlecard2 from "./../../../public/assetsProject/imges/card(8).png";
// import aeticlecard3 from "./../../../public/assetsProject/imges/card(9).png";
import date from "./../../../public/assetsProject/imges/date-vector.png";

export default function ArticlesCards(props) {
    // const [ArticleCards] = useState([
    //     {
    //         id: 1,
    //         img: articlecard2,
    //         title: "Best LearnPress WordPress Theme Collection for 2023",
    //         date: "Jan 24, 2023",
    //         decs: "Looking for an amazing & well-functional LearnPress WordPress Theme?..."
    //     },
    //     {
    //         id: 2,
    //         img: aeticlecard3,
    //         title: "Best LearnPress WordPress Theme Collection for 2023",
    //         date: "Jan 24, 2023",
    //         decs: "Looking for an amazing & well-functional LearnPress WordPress Theme?..."
    //     },
    //     {
    //         id: 3,
    //         img: articlecard1,
    //         title: "Best LearnPress WordPress Theme Collection for 2023",
    //         date: "Jan 24, 2023",
    //         decs: "Looking for an amazing & well-functional LearnPress WordPress Theme?..."
    //     },
    // ])
    return (
        
       <div className="NA-articlesCards NA-flex">
       {props.ArticleCards.map((item) => {
            return(
                <div key={item.id} className="NA-article-card">
                    <div className="NA-article-card-img">
                        <img src={item.img} alt="article-img" />
                    </div>
                    <div className="NA-article-card-content NA-flex">
                        <h3>{item.title}</h3>
                        <div className="NA-date-icon NA-flex">
                            <img src={date} alt="date" />
                            <p>{item.date}</p>
                        </div>
                        <p>{item.decs}</p>
                    </div>
                </div>
            )
        })}
       </div>
    )
}