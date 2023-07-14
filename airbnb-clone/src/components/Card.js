import React from "react"
import Star from '../images/star.png';


export default function Card(props) {
  const katie = "Katie Zaferes";

  return (
    props.isVisible ? (
      <div className="cardsWrapper">
      <div className="cardContainer">
          <img className="katie" src={props.image} />
        <div>
          <img className="star" src={Star} />
          <p>{props.rating}</p>
          <p>{props.title} {katie}</p>
          <p>{props.cost}</p>
        </div>
        </div>
        </div>
    ) : null
  );
}


// ALTERNATE SYNTAX: Each object property in its own variable
// export default function Card({image, rating, title, cost }) { 
//     const katie = "Katie Zaferes"

//     return (
//         <div className="cardContainer">
//             <div className="cardImageWrapper">
//             <img className="katie" src={image} />
//             </div>
//             <div className="cardContent">
//                 <img className="star" src={Star} />
//                 <p>{rating}</p>
//                 <p>{title} {katie}</p>
//                 <p>{cost}</p>
//             </div>
//         </div>
//     );
// }

