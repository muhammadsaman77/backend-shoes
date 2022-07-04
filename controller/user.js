const express = require('express');
const route = express.Router();
const User = require('../models/User')

route.get('/tes',(req,res)=>{
    User.Tes(req,res)
})
route.post('/login',(req,res)=>{
    User.login(req,res)
})
route.post('/register',(req,res)=>{
    User.register(req,res);
})

module.exports = route;