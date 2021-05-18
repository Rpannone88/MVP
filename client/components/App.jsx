import React, { useState } from 'react';
import GitCommands from './GitCommands.jsx';
import '/Users/ryanpannone/HR/webpack-babel-practice/client/styles.less';
 function App(){

    const [dateToday, setDateToday] = useState(Date().toString())
    let month = new Date();
    const fullMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let day = new Date();
    const fullDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let numberDay = new Date();

    return (
      <div>
        <h1>Today is {fullDays[day.getDay()]} {fullMonths[month.getMonth()]} {numberDay.getDate()} and it's time to learn some git!</h1>
        <GitCommands />
      </div>
    )
  }
export default App;


