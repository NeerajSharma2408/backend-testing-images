const expesss = require('express');

const routes = expesss.Router();

routes.get('/',(req,res,next)=>{
    res.status(200).json({message: "route working fine"})
});

routes.post('/',(req,res,next)=>{
    res.status(200).json({message: "this route is working fine too"})
});

module.exports = routes;