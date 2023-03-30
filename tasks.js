const express = require('express');
const firebase = require('../firebase/firebase');
const router = express.Router();

// Ruta para obtener todas las tareas
router.get('/', async (req, res) => {
  try {
    const tasksRef = firebase.db.collection('lista_de_tareas');
    const snapshot = await tasksRef.get();
    const tasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener las tareas');
  }
});

// Ruta para obtener una tarea específica
router.get('/:taskId', async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const taskRef = firebase.db.collection('lista_de_tareas').doc(taskId);
    const doc = await taskRef.get();
    if (!doc.exists) {
      res.status(404).send('Tarea no encontrada');
    } else {
      const task = { id: doc.id, ...doc.data() };
      res.json(task);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener la tarea');
  }
});

// Ruta para crear una nueva tarea
router.post('/', async (req, res) => {
  try {
    const taskData = req.body;
    const newTaskRef = await firebase.db.collection('lista_de_tareas').add(taskData);
    res.json({ message: 'Tarea creada', id: newTaskRef.id });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear la tarea');
  }
});

// Ruta para actualizar una tarea existente
router.put('/:taskId', async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const taskData = req.body;
    const taskRef = firebase.db.collection('lista_de_tareas').doc(taskId);
    await taskRef.set(taskData, { merge: true });
    res.json({ message: 'Tarea actualizada' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al actualizar la tarea');
  }
});

// Ruta para eliminar una tarea existente
router.delete('/:taskId', async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const taskRef = firebase.db.collection('lista_de_tareas').doc(taskId);
    await taskRef.delete();
    res.json({ message: 'Tarea eliminada' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al eliminar la tarea');
  }
});

module.exports = router;