import React from "react"
import Star from '../images/star.png';


export default function Card(props) {
  console.log(props)
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.item.location === "online") { 
    badgeText = "ONLINE"
  }
  return (
      <div className="cardsWrapper">
      {badgeText && <div className="badge">{badgeText}</div>}
      <div className="cardContainer">
          <img className="katie" src={props.item.image} />
        <div>
          <img className="star" src={Star} />
          <p>{props.item.info[0].rating}</p>
          <p>{props.item.info[0].title} "Katie Zaferes"</p>
          <p>{props.item.info[0].cost}</p>
        </div>
        </div>
        </div>
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

