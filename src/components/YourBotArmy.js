import React from "react";
import BotCard from './BotCard';

function YourBotArmy({ botArmy, handleCardClick }) {
  //your bot army code here...
  const botArmyList = botArmy.map(item => {
    return <BotCard key={botArmy.id} botArmy={botArmy} handleCardClick={handleCardClick}/>
  })

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botArmyList}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
