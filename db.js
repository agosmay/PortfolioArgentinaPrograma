const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'proyecto'
})

connection.connect((err)=> {
	if(err) throw err
	console.log('Base de datos esta conectada')
})



module.exports = connection 