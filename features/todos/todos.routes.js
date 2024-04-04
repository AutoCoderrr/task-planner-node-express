const express = require('express');

const router = express.Router();
// ye routing use ke liye 
// controller ki methods ko import 
const todoController = require('./todos.controller.js');

// validation  
const { validateTodo } = require('./todos.validator.js')


// creating routes 

router.get('/', todoController.getAllTodos);
router.get('/:id', todoController.getTodoById);//particuler  for a sigle id 
router.post('/', validateTodo, todoController.createTodo);// create a new todo 
router.put('/:id', validateTodo, todoController.updateTodoById);// we can use patch too
router.delete('/:id', todoController.deleteTodoById)




module.exports = router;

