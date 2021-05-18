import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export default function GitCommands(){

    const [commands, setCommands] = useState([])
    const [usages, setUsages] = useState([])

    const fetchDailyCommand =  () => {
      axios.get('/commands')
      .then(({ data }) => setCommands((prevState) => {
        const newCommands = data.map((item) => { return item.command })
        return [...prevState, ...newCommands]
      }))
      .catch((e) => console.log(e))
  }

  const dailyCommand = commands.length ? commands.map((item) => {
    console.log(commands)
    return (
    <>
      <span>
        Your Official Git Command of The Day: {item}
      </span>
    </> )
  }) : null;


  const fetchDailyUsage =  () => {
    axios.get('/commands')
    .then(({ data }) => setUsages((prevState) => {
      const newUsage = data.map((item) => { return item.usage })
      return [...prevState, ...newUsage]
    }))
    .catch((e) => console.log(e))
}

  const dailyUsage = usages.length ? usages.map((item) => {

    return (
    <>
      <span>
        Whats it for??: {item}
      </span>
    </> )
  }) : null;

  return (

    <>
    <button onClick={() => fetchDailyCommand()}>Click For Commands</button>

    <div>
      {dailyCommand}
    </div>
    <button onClick={() => fetchDailyUsage()}>What does it do?</button>
    <div>
      {dailyUsage}
    </div>

    </>
  )

}


