const express = require('express');
const db = require('./config/mysql')
const user = require('./controller/user')
const cors = require('cors');
const port = 2003;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api',user)
db.connect((err)=>{
    if (err) throw err; 
    console.log("database connected")
})
app.listen(port,()=>{
    console.log(`Server dijalankan pada port ${port}`)
})