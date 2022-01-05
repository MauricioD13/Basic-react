import React from "react";
import '../css/overview.css'
import CardSmall from './card-small'

const cardSmallList = [
  {
    id: 1, 
    icon: 'facebook',
    category: 'Page Views',
    number: '87',
    percentage: '3%',
    direction: 'up',
  },
  {
    id: 2,
    icon: 'facebook',
    category: 'Likes',
    number: '1',
    percentage: '2%',
    direction: 'down',
  },
  {
    id: 3,
    icon: 'instagram',
    category: 'Likes',
    number: '87',
    percentage: '87%',
    direction: 'up',
  },
  {
    id: 4,
    icon: 'instagram',
    category: 'Profile Views',
    number: '10',
    percentage: '10%',
    direction: 'up',
  },
  {
    id: 5,
    icon: 'twitter',
    category: 'Retweets',
    number: '5',
    percentage: '10%',
    direction: 'down',
  },
  {
    id: 6,
    icon: 'twitter',
    category: 'Likes',
    number: '20',
    percentage: '25%',
    direction: 'up',
  },
  {
    id: 7,
    icon: 'youtube',
    category: 'Likes',
    number: '1',
    percentage: '1%',
    direction: 'up',
  },
  {
    id: 8,
    icon: 'youtube',
    category: 'Total Views',
    number: '0',
    percentage: '0%',
    direction: 'up',
  },
  
]


function Overview(){
    return (
        <section className="overview">
        <div className="wrapper">
          <h2>Overview - Today</h2>
          <div className="grid">
            {
              cardSmallList.map(({id, icon, category, number, percentage, direction}) => 
                <CardSmall key={id} icon={icon} category={category} number={number} percentage={percentage} direction={direction}/>)
            }

          </div>
        </div>
      </section>
    );

}

export default Overview;