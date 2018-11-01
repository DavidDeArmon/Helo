module.exports={
    registerUser(req,res){
        let db=req.app.get('db');
        const {username,password} = req.body
        db.registerUser([username,password]).then((response)=>{
            res.status(200).json(response)
        })
    },
    loginUser(req,res){
        let db=req.app.get('db');
        const {username,password} = req.body
        db.loginUser([username,password]).then((response)=>{
            res.status(200).json(response)
        })
    }
} 