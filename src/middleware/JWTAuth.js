const jwt = require('jsonwebtoken')

exports.validateAuth = async ({ req, res }, callback) =>{
    const token = req.cookies.token;
    try{
        const user = jwt.verify(token, process.env.MY_SECRET);
        req.user = user;
        if (callback) await callback(req, res);
    }catch(err){
        res.clearCookie("token");
        res.status(403).send({ message: "Required authentication"});
    }
}