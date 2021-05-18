const Pool = require('pg').Pool
const pool = new Pool({
  user: 'ryanpannone',
  host: 'localhost',
  database: 'git_commands',
  password: 'password',
})

 const getAllCommands = async () => {
  const queryString = 'select * from commands where id = 30'
  let response;
  try{
    response = await pool.query(queryString)
    return response.rows
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  getAllCommands,
}