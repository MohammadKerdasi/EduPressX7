import { useState } from "react"

// for css 
import "./CounterCards.css"

export default function CounterCards () {
    const [CounterCards] = useState ([
        {
            id: 1,
            count: "25K+",
            desc: "active students"
        },
        {
            id: 2,
            count: "899",
            desc: "total courses"
        },
        {
            id: 3,
            count: "158",
            desc: "Instructor"
        },
        {
            id: 4,
            count: "100%",
            desc: "Satisfaction rate"
        }
    ])
return (
    <section className="NA-counterCards-Section Project-Container NA-flex"> 
        {CounterCards.map((item) => {
            return(
                <div key={item.id} className="NA-counter-card NA-flex">
                    <h3>{item.count}</h3>
                    <p>{item.desc}</p>
                </div>
            )
        })}
    </section>
)
}