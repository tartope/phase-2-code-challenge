import React from "react";
import BotCard from "./BotCard"

function BotCollection({ bots, botArmy, setBotArmy }) {
  // Your code here

  const botCard = bots.map(bot =>{
    function handleClickCard(bot){
      if(!botArmy.includes(bot)){
        setBotArmy([...botArmy, bot])
      }
    }
    return <BotCard  key={bot.id} bot={bot} handleClickCard={handleClickCard} />
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
