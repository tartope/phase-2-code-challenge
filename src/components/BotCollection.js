import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, setBotArmy }) {
  // Your code here

  function handleCardClick(previousArmy){
    // console.log(previousArmy)
    return [...previousArmy, bots]
    
  }

  const botCard = bots.map(bot => {
    return <BotCard key={bot.id} bot={bot} handleCardClick={handleCardClick}/>
  })
  return (
    <div className="ui four column grid">
      <div className="row">
        {botCard}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
