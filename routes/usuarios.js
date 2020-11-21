import express from 'express'
const router = express.Router()

// importar el modelo usuario
import user from '../models/user'


// Hash Contraseña
const bcrypt = require('bcrypt');
const saltRounds = 10

// Agregar un usuario
router.post('/nuevo-user', async(req, res) => {
  const body = req.body;
  body.pass = bcrypt.hashSync(req.body.pass, saltRounds);
  try {
    const userDB = await user.create(body);
    res.status(200).json(userDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Exportación de router
module.exports = router;