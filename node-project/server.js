import express from "express";
import cors from "cors";
import mysql from "mysql";
import http, { METHODS } from "http";

const app = express();
const server = http.createServer(app);

app.use(cors({
  credentials : true,
  origin : "*"
}));

app.use(express.json());

const connection = mysql.createConnection({
  host : "db4free.net",
  user : "vcentry",
  password : "test@123",
  database : "travelix",
  port : 3306
});

connection.connect((error) => {
  if(error){
    throw error;
  }
  else{
    console.log("MYSQL Server has been connected");
  }
})

// http://localhost:5000/api/test
// Method : GET
app.get("/api/test", (request, response) => {
  response.status(200).send("Node js API is working fine");
})

const UserList = [
  { name : "Archana"}, {name : "Deepak"}, {name : "Arun"}, {name : "Suresh"}, {name : "Karthick"}
];

// http://localhost:5000/api/user/list
// Method : GET
app.get("/api/user/list", (request, response) => {
  response.status(200).send(UserList);
});

// http://localhost:5000/api/user/create
// Method : POST
// Payload :
// {
//   name : "any username"
// }

app.post("/api/user/create", (request, response) => {
  const incomingData = request.body;
  UserList.push(incomingData);
  response.status(200).send("User profile has been created");  
})


// CRUD Operation Code Begin

/*
URL: http://localhost:5000/api/create/record
METHOD : POST
Payload
{
  username : string,
  email : string,
  age : number,
  location : string
}
*/
app.post("/api/create/record", (request, response) => {
  const incomingData = request.body;
  const age = parseInt(incomingData.age);
  
  const sql_query = `INSERT INTO karthickkumar_table (username, email, age, location) VALUES ('${incomingData.username}', '${incomingData.email}', ${age}, '${incomingData.location}')`;

  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send(result);
    }
  })
})

// URL : http://localhost:5000/api/read/record
// METHOD : GET

app.get("/api/read/record", (request, response) => {
  const sql_query = `SELECT * FROM karthickkumar_table`;

  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send(result);
    }
  })
});

/*
URL : http://localhost:5000/api/update/record/2
METHODS : PUT 
Payload 
{
  username : string,
  email : string,
  age : number,
  location : string
}
*/
app.put("/api/update/record/:id", (request, response) => {
  const incomingData = request.body;
  const incomingId = request.params.id;

  const age = parseInt(incomingData.age);

  const sql_query = `UPDATE karthickkumar_table SET username='${incomingData.username}', email='${incomingData.email}', age=${age}, location='${incomingData.location}' WHERE id=${incomingId}`;

  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send(result);
    }
  })
})


const portNumber = process.env.PORT || 5000;
server.listen(portNumber, () => {
  console.log("Node JS project is running")
})