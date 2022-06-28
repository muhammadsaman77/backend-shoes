const db = require('../config/mysql');

exports.Login = (req,res)=>{
    const sqlquery = "SELECT * FROM tbl_users";
    db.query(sqlquery,(err,results)=>{
        res.json({
            status:200,
            results:results
        })
    })
}
exports.Register = (req,res)=>{
    const sqlquery = `INSERT INTO tbl_users (id, name, telephone, email, password) VALUES (NULL, '${req.body.name}','${req.body.telephone}','${req.body.email}','${req.body.password}')`;
    db.query(sqlquery,(err,results)=>{
        res.json({
            status : 200,
            results : results
        })
    })
}
