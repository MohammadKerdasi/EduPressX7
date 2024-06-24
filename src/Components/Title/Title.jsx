// for css
import "./Title.css"

export default function Title (props) {
    return (
        <div className="NA-section-header NA-flex">
            <div className="NA-header-text">
                <h2>
                    {/* Top categories */}
                    {props.header}
                </h2>
                <p>
                {/* Explore our Popular Categories */}
                {props.desc}
                </p>
            </div>
          {props.showBtn &&   <button className="NA-btn-effect NA-header-btn">
                {/* all categories */}
                {props.btn}
             </button>
             
           }
        </div>
    )
}