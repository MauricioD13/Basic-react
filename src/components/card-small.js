import React from "react";
import '../css/card-small.css'


function CardSmall(props) {
    
    const number_color = props.direction === 'up' ? '': 'is-danger' ;
    return (
        <div className="card-small">
            <p className="card-small-views">{props.category}</p>
            <p className="card-small-icon">
                <img src={`images/icon-${props.icon}.svg`} alt="" />
            </p>
            <p className="card-small-number">{props.number}</p>
            <p className={`card-small-percentage ${number_color}`}>

                <span>
                <img src={`images/icon-${props.direction}.svg`} alt="" />
                {props.percentage}
                </span>
            </p>
        </div>
  );
}

export default CardSmall;