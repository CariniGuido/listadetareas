const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { connect } = require('./firebase/firebase');
const tasks = require('./routes/tasks');

const app = express();
const port = process.env.PORT || 3000;

// Configuración del middleware
app.use(bodyParser.json());
app.use(cors());

// Configuración de las rutas
app.use('/tasks', tasks);

// Configuración de Firebase
const firebaseConfig = {
  // Tu configuración de Firebase
};

const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

// Conexión a Firebase
connect();

// Inicio del servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});