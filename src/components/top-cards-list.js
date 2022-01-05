import React from "react";
import Card from './card'
import '../css/top-card-list.css'


const cardListData = [  
  {
    username: '@mdavidcuello',
    id: 1,
    followers: '250',
    social_net: 'facebook',
    todayFollowers: 2,
  },

  {
    username: '@mdavidcuello',
    id: 2,
    followers: '300',
    social_net:'instagram',
    todayFollowers: 1,
  },

  {
    username: '@mdavidcuello',
    id: 3,
    followers: '60',
    social_net: 'twitter',
    todayFollowers: 0,
  },
  {
    username: '@mdavidcuello',
    id: 4,
    followers: '0',
    social_net: 'youtube',
    todayFollowers: 0,
  },
]

function TopCardList() {
  return (
    <section className="top-cards">
      <div className="wrapper">
        <div className="grid">
          {
            cardListData.map(
              (cardData) => <Card key={cardData.id} {...cardData} />) 
              /* Hacer el spread no es muy buena práctica debido a que el 
              código debe ser lo mas explicito posible*/
              
          
          }

        </div>
      </div>
    </section>
  );
}

export default TopCardList;
