import React, {useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const botsAPI = 'http://localhost:8002/bots';

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([])
  const [botArmy, setBotArmy] = useState([])

  useEffect(()=>{
    fetch(botsAPI)
    .then(response => response.json())
    .then(botsData => {
      // console.log(botsData)
      setBots(botsData)
    })
  }, [])

  return (
    <div>
      <YourBotArmy botArmy={botArmy} />
      <BotCollection bots={bots} setBotArmy={setBotArmy} />
    </div>
  )
}

export default BotsPage;
