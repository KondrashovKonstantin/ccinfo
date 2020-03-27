const express = require('express');
const config = require('config');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.json({ extended: true }))
app.use('/api/coincap', require('./routes/coincap-routes.js'));




const PORT = config.get('port')||8000;

async function start(){
    try{
        app.listen(PORT, ()=>console.log(`App has been started on port  ${PORT}...`));
    }
    catch(e){
        console.log('SERVER ERROR:  ' + e.message);
        process.exit(1);
    }
}
start();