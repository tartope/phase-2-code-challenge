import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, botArmy, setBotArmy }) {
  //your bot army code here...
  const botArmyCard = bots.map(bot =>{
    function handleClickCard(){
      const removeBotArmy = bots.filter((item) => item !== bot)
      setBotArmy(removeBotArmy)
    }
    return <BotCard key={bot.id} bot={bot} handleClickCard={handleClickCard}/>
  })
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botArmyCard}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
