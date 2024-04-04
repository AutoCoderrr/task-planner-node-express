const express = require('express');

const app = express();
const PORT = 7000;
const todoRouter = require('./features/todos/todos.routes.js');
const signInRouter = require('./features/account/signin/signin.router.js');



app.use(express.json());

// app.use('/signin', signInRouter);
app.use('/todos', todoRouter);


app.listen(PORT, (req, res) => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

