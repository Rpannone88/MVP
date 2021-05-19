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
      <span className="command">
        {item}
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
      <span  className="usage">
        {item}
      </span>
      <div>

        <a href="https://git-scm.com/docs/git-diff" className="need">Need More Info?</a>
      </div>
    </> )
  }) : null;



  return (

    <>
    <div className="container">
    <button className="btn" onClick={() => fetchDailyCommand()}>command</button>

    <button className="btn" onClick={() => fetchDailyUsage()}>usage</button>
    </div>

    <div>
      {dailyCommand}
    </div>

    <div>
      {dailyUsage}
    </div>

    </>
  )

}


