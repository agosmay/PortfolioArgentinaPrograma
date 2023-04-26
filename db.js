const mysql = require('mysql');
const path = require('path')
const dotenv = require('dotenv')
dotenv.config({path:'./.env'})// si o si incluir el path para q encuentre las variables de entorno


const connection = mysql.createConnection({
  host     : process.env.DB_HOST ,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_DATABASE
})

connection.connect((err)=> {
	if(err) throw err
	console.log('Base de datos esta conectada')
})



module.exports = connection 


  
  
  
  
  
