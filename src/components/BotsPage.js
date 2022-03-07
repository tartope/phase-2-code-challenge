import React, {useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const botsAPI = 'http://localhost:8002/bots';

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([])
  const [botsArmy, setBotArmy] = useState([])

  useEffect(()=>{
    fetch(botsAPI)
    .then(response => response.json())
    .then(botsData => {
      // console.log(botsData)
      setBots(botsData)
    })
  }, [])

  function handleAddToYourBotArmy(bot){
    if(!botsArmy.includes(bot))
    setBotArmy([...botsArmy, bot])
  }

  function handleRemoveFromYourBotArmy(bot){
    const removeBot = botsArmy.filter(item => item.id !== bot.id)
    setBotArmy(removeBot)
  }

  function handleDeleteBots(deleteBot){
    fetch(`${botsAPI}/${deleteBot.id}`, {
      method: 'DELETE',
    })
    const deleteBots = bots.filter(item => item.id !== deleteBot.id)
    setBots(deleteBots)
    const deleteBotsArmy = botsArmy.filter(item => item.id !== deleteBot.id)
    setBotArmy(deleteBotsArmy)
  }

  return (
    <div>
      <YourBotArmy botsArmy={botsArmy} handleRemoveFromYourBotArmy={handleRemoveFromYourBotArmy} handleDeleteBots={handleDeleteBots} />
      <BotCollection bots={bots} setBotArmy={setBotArmy} handleAddToYourBotArmy={handleAddToYourBotArmy} handleDeleteBots={handleDeleteBots} />
    </div>
  )
}

export default BotsPage;
