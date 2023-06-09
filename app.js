const express = require('express');
const session = require('express-session')
const hbs = require('hbs');
const path = require('path');
const dotenv = require('dotenv')
dotenv.config({path:'./.env'})// si o si incluir el path para q encuentre las variables de entorno

const app = express();


let opciones = {
  host     : process.env.DB_HOST ,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  database : process.env.DB_DATABASE
	 
	
	 
	 
	 
}

app.use(session({
	
	secret: '1234',
	resave : false,
	saveUninitialized : false,
	cookie : { maxAge : 300000 } 
	
	
	
}))


app.set('view engine', 'hbs');

app.set('views', [
	path.join('./views/front'),
	path.join('./views/back'),
	path.join('./views')
]) 


//archivos estaticos en carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')))

//necesario para leer req.body 

app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));



app.use(express.static('public'))

//registrar parciales {{ > }}  para poder usar los parciales
hbs.registerPartials(__dirname + '/views/partials')

const routes = require('./routes/rutas')
app.use(routes)




app.use((req,res, next)=> { // con o sin next
	res.status(404).render('404' , {
		titulo: '404 -Not Found'
	});
})

// servidor escuchando en puerto 3000

app.listen(3000, () => {
	console.log('Servidor en puerto 3000');
	
})

