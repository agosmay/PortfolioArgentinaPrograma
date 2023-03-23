const express = require('express')
const router = express.Router()

const {editarGET,
	loginPOST,
	editarPOST,
	agregarGET,
	adminGET,
	borrarGET ,
	agregarPOST,
	loginGET,
	logout,
	inicioGET } = require('../controllers/controller')




// ======= RUTAS FRONT ====================

router.get('/', inicioGET)

router.get('/log-in' , loginGET)

router.post('/log-in', loginPOST)


// =============== RUTAS BACK =====================
//ADMIN y crud AGREGAR Y EDITAR Y LOGin

router.get('/admin', adminGET)

router.get('/agregar-info', agregarGET)

router.post('/agregar-info' , agregarPOST)

router.get('/editar-info/:id', editarGET)

router.post('/editar-info/:id', editarPOST)

router.get('/borrar-info/:id',  borrarGET)

router.get('/logout', logout)






module.exports = router