import React from "react";
import BotCard from './BotCard';

function YourBotArmy({ botsArmy, handleRemoveFromYourBotArmy, handleDeleteBots }) {
  //your bot army code here...
  const botCard = botsArmy.map(bot => {
    return <BotCard key={bot.id} bot={bot} onCardClick={handleRemoveFromYourBotArmy} onClickDelete={handleDeleteBots} />
  })

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botCard}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
