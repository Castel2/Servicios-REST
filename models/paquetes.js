import mongoose from 'mongoose'
const Schema = mongoose.Schema

const estados = {
  values: ['Pendiente', 'Recogido', 'Rumbo destino', 'Entregado'],
  message: '{VALUE} Estado no valido'
}

const paquetesSchema = new Schema({

  peso: {type: String, required: [true, 'Peso obligatorio']},
  volumen: {type: String, required: [true, 'Volumen obligatorio']},
  direccion: {type: String, required: [true, 'Dirección obligatorio']},
  destino: {type: String, required: [true, 'Destino obligatorio']},
  descripcion: {type: String, required: [true, 'Descripción obligatorio']},
  estado: {type: String, default: 'Pendiente', enum: estados},
  calificacion: {type: String, default: '0'},
  date: {type: Date, default: Date.now},

});

// Convertir a un modelo 
const paquete = mongoose.model('Paquetes', paquetesSchema);

export default paquete;
