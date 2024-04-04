const express = require('express');
// import siginUser from "./signin.controller.js";
const signinUser= require('./signin.controller.js');

const signinRouter = express.Router();

signinRouter.post('/', signinUser);

app.get('/login', function(req,res){
    res.redirect('http://localhost:7000/todos')
})

export default signinRouter;
