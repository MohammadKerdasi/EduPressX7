// for css
import "./ExploreCourses2.css"

// for images
import card1 from "./../../../public/assetsProject/imges/educationTheme-image 9.png"
import card2 from "./../../../public/assetsProject/imges/educationTheme-image 10.png"
import card3 from "./../../../public/assetsProject/imges/educationTheme-image 7.png"
import card4 from "./../../../public/assetsProject/imges/educationTheme-image 6.png"
import card5 from "./../../../public/assetsProject/imges/educationTheme-image 5.png"

export default function ExploreCourses2() {
    return (
      <div className="Project-Container">
        <div className="NA-ExploreCourses2 NA-flex">
          <div className="NA-ExploreCourses-text">
            <p className="NA-ExploreCourses-subtitle">PROVIDING AMAZING</p>
  
            <h3 className="NA-ExploreCourses-title">education wordpress theme</h3>
  
            <p className="NA-ExploreCourses-desc">
            The next level of LMS WordPress Theme. Learn anytime and anywhere.
            </p>
            <button className="NA-btn NA-btn-effect">Explore courses</button>
            <img className="NA-credit-card NA-credit-cardGreen" src={card1} alt="credit-card" />
            <img className="NA-credit-card NA-credit-cardBlue" src={card2} alt="credit-card" />
            <img className="NA-credit-card NA-credit-cardPurple" src={card3} alt="credit-card" />
            <img className="NA-credit-card NA-credit-cardWhite" src={card4} alt="credit-card" />
            <img className="NA-credit-card NA-credit-cardYellow" src={card5} alt="credit-card" />
          </div>
        </div>
      </div>
    );
  }
  