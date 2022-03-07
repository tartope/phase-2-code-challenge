import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, handleAddToYourBotArmy, handleDeleteBots }) {
  // Your code here

  const botCard = bots.map(bot => {
    return <BotCard key={bot.id} bot={bot} onCardClick={handleAddToYourBotArmy} onClickDelete={handleDeleteBots} />
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
