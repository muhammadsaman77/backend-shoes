const db = require('../config/mysql');

exports.login = async (req,res)=>{
    const {email,password} = req.body;
    const sqlquery = 'SELECT * FROM tbl_users WHERE email = ? and password=?';

        db.query(sqlquery,[email,password],(err,results)=>{
        if (err) throw err;
        if (results.length >0){
            return res.json({
                status : "success",
                message : "Login telah berhasil"
            })
        }
        else{
            return res.json({
                status : "error",
                message : "Email dan Password tidak ada yang cocok"
            })
        }

}
)}
exports.register = async (req,res)=>{
    const {name,telephone, email, password} = req.body;
    const sqlquery = 'INSERT INTO tbl_users SET ?';
    db.query("SELECT email FROM tbl_users where email = ?",[email],(err,results)=>{
        if (results.length >0){
            res.json({
                status : "error",
                message: "Email telah digunakan"
            })
        }
        else{
            db.query(sqlquery,{name:name,telephone:telephone,email:email,password:password},(err,results)=>{
                if (err) throw err;
                return res.json({
                    status : "success",
                    message : "Akun user telah berhasil di daftarkan"
                })
            })
        }
    })

}
