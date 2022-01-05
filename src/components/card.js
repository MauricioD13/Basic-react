import React from "react";
import '../css/card.css'

function Card({ username, followers, social_net, todayFollowers}) {
    return (
    <article className={`card ${social_net}`}>
        <p className="card-title">
            <img src={`../images/icon-${social_net}.svg`} alt="" />
                {username}
        </p>
        <p className="card-followers">
            <span className="card-followers-number">{followers}</span>
            <span className="card-followers-title">Followers</span>
        </p>
        <p className="card-today">
            <img src="../images/icon-up.svg" alt="" />
            {todayFollowers} Today
        </p>
    </article>
    );
}

export default Card;
