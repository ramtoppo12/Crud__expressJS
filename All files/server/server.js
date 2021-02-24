//importing express module
const express = require("express");


//initializing app
const app = express();

//importing body-parser module

var bodyParser = require('body-parser');

global.__basedir= __dirname;

//impoting database config

const db = require('./db.config.js');

// const Customer = db.Customer;

//importing router from router.js file

let router = require("./router.js");

//importing cors module

const cors = require('cors')

const corsOptions = {
    origin:"http://localhost:4200",
    optionSucessStatus:200
}

//middlewares

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.json());

app.use(express.static('resources'));

//routes

app.use('/',router);

//create a Server and port

const server = app.listen(8080,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log('App listening at http://%s:%s',host,port);
});


// db.sequelize.sync({force:true}).then(()=>{
//     console.log('Drop and Resync with{force:true}');
//     Customer.sync().then(()=>{
//         const customers=[{
//             firstName:"Jack",lastName:"Smith",address:"374 Wiliam S canning Blvd",age:23
//         },{
//             firstName:"adam",lastName:"Smith",address:"374 Wiliam S canning Blvd",age:34

//         }]

//         for(let i=0;i<customers.length;i++){
//             Customer.create(customers[i]);
//         }
//     })
// })

