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

        <div>
        <span className="title">Today is {fullDays[day.getDay()]} {fullMonths[month.getMonth()]} {numberDay.getDate()}</span>
        </div>
        <div>
          <span className="title">Time to learn some git.</span>
        </div>

        <GitCommands />
      </div>
    )
  }
export default App;


