const express = require('express');
const app = express();
const path = require('path');
const db = require('/Users/ryanpannone/HR/webpack-babel-practice/database/queries.js')
const port = 3000;
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(express.static(path.join(__dirname, '..')));



app.listen(port, () => {
  console.log(`Server listening at localhost:${port}`);
});

app.get('/commands',  async (req, res) => {
      try {
      const commands = await db.getAllCommands()
      res.send(commands)
      } catch(e) {
        console.log(e)
      }
 })

module.exports = app

