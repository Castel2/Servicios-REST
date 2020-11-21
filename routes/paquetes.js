import express from 'express'
const router = express.Router()

// importar el modelo paquete
import paquete from '../models/paquetes'

// Crear solicitud
router.post('/nueva-solicitud', async(req, res) => {
  const body = req.body;  
  try {
    const paqueteDB = await paquete.create(body);
    res.status(200).json(paqueteDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Get con parámetros
router.get('/mostrar-solicitud/:id', async(req, res) => {
  const _id = req.params.id;
  try {
    const paqueteDB = await paquete.findOne({_id});
    res.json(paqueteDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Get con todos los paquete
router.get('/ver-solicitud', async(req, res) => {
  try {
    const paqueteDB = await paquete.find();
    res.json(paqueteDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Delete eliminar una paquete
router.delete('/eliminar-solicitud/:id', async(req, res) => {
  const _id = req.params.id;
  try {
    const paqueteDB = await paquete.findByIdAndDelete({_id});
    if(!paqueteDB){
      return res.status(400).json({
        mensaje: 'No se encontró el id indicado',
        error
      })
    }
    res.json(paqueteDB);  
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Put actualizar un paquete
router.put('/actualizar-solicitud/:id', async(req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const paqueteDB = await paquete.findByIdAndUpdate(
      _id,
      body,
      {new: true});
    res.json(paqueteDB);  
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Put cambia el estado de una solicitud
router.put('/cambiar-estado/:id', async(req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    const paqueteDB = await paquete.findByIdAndUpdate(
      _id,
      body,
      {new: true});
    res.json(paqueteDB);  
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Exportación de router
module.exports = router;