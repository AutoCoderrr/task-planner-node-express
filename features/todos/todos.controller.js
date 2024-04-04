const Todo = require('./todos.model.js');
// import Todo from './todos.model.js';

// array of todos 
let todos = [
    {
        id: 1,
        title: "first todo",
        description: "this is my first todo "
    }
];


// all todoss
exports.getAllTodos = (req, res) => {
    res.json(todos);
}

// todos by id 
exports.getTodoById = (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(todo=>todo.id === id);
    if (!todo) {
        return res.status(400).json({ message: 'todo not found ' });
    } else {
        res.json(todo);
    }

}
// create todo 
exports.createTodo = (req, res) => {
    const { title, description } = req.body;
    const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    const newTodo = new Todo(id, title, description);
    todos.push(newTodo);
    res.status(201).json(newTodo);
};

// updatetodod by id 
exports.updateTodoById = (req, res) => {
    const id = parseInt( req.params.id);
    const { title, description } = req.body;
    const theTodoToGetUpdate = todos.find(todo => todo.id === id);
    if (!theTodoToGetUpdate) {
        return res.status(400).json({ message: 'todo not found' });

    } else {
        theTodoToGetUpdate.title = title;
        theTodoToGetUpdate.description = description;
        res.json(theTodoToGetUpdate);

    };
}
    // deleting todo by id 
    exports.deleteTodoById = (req, res) => {
        const id = parseInt(req.params.id);
        const index = todos.findIndex(todo => todo.id === id);
        if (index === -1) {
            return res.status(400).json({ message: `todo not found` })
        } else {
            todos.splice(index, 1);
            res.json({ message: `todo deleted successfully` })
        }
    };


