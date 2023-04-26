const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'bdcbxza52weqjma0wkfp-mysql.services.clever-cloud.com',//'localhost', antes de clever
  user: 'ulsewx9x9jukrnd1', //'root', antes de clever 
  password: 'plnBOz1AMLwCtEI3Wlkc', //'' antes de clever
  database: 'bdcbxza52weqjma0wkfp' // antes de clever 'proyecto'
})

connection.connect((err)=> {
	if(err) throw err
	console.log('Base de datos esta conectada')
})



module.exports = connection 