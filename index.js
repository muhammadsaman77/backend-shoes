const express = require('express');
const port = 2003;
const user = require('./controller/user')
const app = express();
app.use(express.json());
app.use('/api',user)

app.listen(port,()=>{
    console.log(`Server dijalankan pada port ${port}`)
})