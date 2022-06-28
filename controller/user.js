const express = require('express');
const route = express.Router();
const User = require('../models/User')

route.get('/login',(req,res)=>{
    User.Login(req,res)
})
route.post('/register',(req,res)=>{
    User.Register(req,res);
})
module.exports = route;