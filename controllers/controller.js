const db = require('../db')



//NAME en el formulario debe coincidir con las columnas de la base de datos 



//CONTROLLERS FRONT 





const inicioGET = (req,res)=> {
	//GUARDAR LA CONSULTA EN UNA VARIABLE
	let sql = "SELECT * FROM info"
	db.query(sql,(error, data)=> {
		if(error) res.send(`Ocurrio un error ${error.code}`)
			
		res.render('index', {
			titulo : 'Inicio Portfolio',
			logueado : req.session.logueado,
			usuario : req.session.usuario,
			informacion: data
		})
	
	
		
	
		
	})
	
	
	}
	

//controllers BACK


const adminGET = (req,res) => {
	
	
	if(req.session.logueado) { //existe este objeto con propiedad logueado ?? si. o no
		let sql = "SELECT * FROM info"
	db.query(sql,(error,data) =>{
		if(error) res.send(`Ocurrio el siguiente error ${error.code}`);
		res.render('admin' , {
			titulo: 'Panel de Control',
			logueado : req.session.logueado,
			usuario : req.session.usuario,
			informacion : data
			
		})
		
		
	})
		
		
	} else {
		
		res.render('log-in', {
			titulo : 'Log In', 
			error: 'Por favor loguearse para ver esta pagina'
			
		})
	}
	
	
	
}


const agregarGET = (req,res) => { 

if(req.session.logueado) {
	res.render('agregar-info' , {
		titulo: 'Agregar info',
		logueado : req.session.logueado,
			usuario : req.session.usuario
		
	})

	
	
} else {
	
	res.render('log-in', {
			titulo : 'Log In', 
			error: 'Por favor loguearse para ver esta pagina'
	
	
})

	
	
	
}

}

const agregarPOST = (req, res) => {

	
	const detalles = req.body
	let sql = "INSERT INTO info SET ? "  
	db.query(sql, detalles, (error, data) => {
		
		if(error) res.send(`Ocurrio el siguiente error ${error.code}`)
			console.log('Informacion agregada correctamente')
		
			
	})
		res.render('agregar-info', {
		mensaje: 'Info agregada correctamente',
		titulo: 'Agregar Info'
	
		
	})
}

//EDITAR GET NECESITAMOS CONSULTAR A LA BASE DE DATOS PORQ NECESITAMOS PRE-LLENAR EL "FORMULARIO"

const editarGET = (req,res) => {
	
	if(req.session.logueado) {
		let id = req.params.id 
	let sql = 'SELECT * FROM info WHERE id = ?'
	db.query(sql, id, (err, data)=> {
		if(err) res.send(`Ocurrio un error ${err.code}`)
			if (data=='') {
				res.status(404).render('404' , {
					titulo : '404-Not Found', 
					mensaje : `Informacion con ID ${id} no existente`
				})
			} else {
				res.render('editar-info' , {
				titulo : `Editando ${id}`,
				logueado : req.session.logueado,
			usuario : req.session.usuario,
				informacion : data[0]
	})
			}
	
	})
} else {
	
	res.render('log-in', {
			titulo : 'Log In', 
			error: 'Por favor loguearse para ver esta pagina'
})
}
}

//EDITAR POST 


const editarPOST = (req,res) => {
	let id = req.params.id // lo primero es tomar el id de la url
	let detalles = req.body //tomar la info del cuerpo del form
	
	let sql = "UPDATE info SET ? WHERE id = ? "
	db.query(sql, [detalles, id] , (err,data) => {
		if(err) res.send (`Ocurrio el siguiente error ${err.code}`);
		console.log(data.affectedRows + " registro actualizado ")
		
		
	})
	
	res.redirect('/admin')
		
}

//borrar por id


const borrarGET = (req,res) => {
	
	if(req.session.logueado) {
		let id= req.params.id
	let sql = 'DELETE FROM info WHERE id = ?'
	db.query(sql, id, (err, data) => {
		if(err) res.send(`Ocurrio un error ${err.code}`)
			console.log(data.affectedRows + " registro eliminado ")	
	})
	
	res.redirect('/admin')
	
	
	
} else {
	
	res.render('log-in', {
			titulo : 'Log In', 
			error: 'Por favor loguearse para ver esta pagina'
})
	
}

}


const loginGET = (req,res)=> { 
	res.render('log-in' , {
		titulo: 'Log In'
	});
}


const loginPOST = (req,res) => {
	let usuario = req.body.username
	let clave = req.body.password
	
	if(usuario && clave) {  // con falsy y truthy si usuario es "" string vacia es falsy por lo tanto no entra
	//si devuelve true es porq al menos tiene algun caracter 
	
	let sql = "SELECT * FROM cuentas WHERE email = ? AND clave = ?"
	db.query(sql, [usuario, clave] , (error, data) => {
		console.log("DATA", data)
		if(data.length>0) { 
			
			req.session.logueado = true // agregamos una propiedad al objeto
			req.session.usuario = usuario // para los encabezados login logout ARRIBA en la interfaz grafica
			
			res.redirect("/admin")
			
		} else {
			
			//error
			
			res.render('log-in' , {
				titulo: 'Log in',
				error: 'Nombre de usuario o contrasena incorrecto'
				
			})
		}
		
	})
		
	} else {
		res.render('log-in' , {
				titulo: 'Log in',
				error: 'Por favor escriba usuario y contrasena para ingresar'
				
			})
	}				
	
}

const logout = (req,res) => {
	req.session.destroy(function (err) {
		if(err) res.send(`se produjo este error ${err.code}`)
	})
	
	res.render('index', {
		titulo: 'Inicio'
		
	})
}

module.exports = {
	editarGET,
	loginPOST,
	editarPOST,
	agregarGET,
	adminGET,
	 borrarGET ,
	agregarPOST,
	loginGET,
	logout,
	inicioGET
}


