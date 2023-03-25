const expesss = require('express');
const routes = require('./routes/signupRoutes');

const app = expesss();

app.use('/', routes);

const port = 8000 || process.env.PORT;

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("The Express APP is running of port "+port);
    }
});