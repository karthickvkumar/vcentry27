// npm init 
// npm i express cors mysql nodemon -s
import express from "express";
import cors from "cors";
import mysql from "mysql";
import http, { request } from "http";

const app = express();
const server = http.createServer(app);

app.use(cors({
  credentials : true,
  origin : "*"
}));

app.use(express.json({ limit : "10mb" }));

const connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "",
  database : "travelix"
});

/*
CREATE DATABASE travelix;

USE travelix;
CREATE TABLE travelix_destinations (destinationName varchar(255), location varchar(255), destinationImage LONGTEXT, destinationCount varchar(255), id int NOT NULL AUTO_INCREMENT, PRIMARY KEY(id));

USE travelix;
CREATE TABLE travelix_hotels(name varchar(255), destination varchar(255), image LONGTEXT, price varchar(255), location varchar(255), available boolean, id int NOT NULL AUTO_INCREMENT, PRIMARY KEY(id));
*/

// const connection = mysql.createConnection({
//   host : "db4free.net",
//   user : "vcentry",
//   password : "test@123",
//   database : "travelix",
//   port : 3306
// });

connection.connect((error) => {
  if(error){
    throw error;
  }
  else{
    console.log("MySQL Connected");
  }
});

// URL : http://localhost:5000/api/create/destination
// Method : POST 
// payload 
// {
//   destinationCount : string 
//   destinationImage : string 
//   destinationName : string 
//   location : string 
// }

app.post("/api/create/destination", (request, response) => {
  const sql_query = `INSERT INTO travelix_destinations (destinationName , location , destinationImage , destinationCount) VALUES ('${request.body.destinationName}', '${request.body.location}', '${request.body.destinationImage}', '${request.body.destinationCount}')`;

  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send("Destination has been created");
    }
  })
});

// URL : http://localhost:5000/api/list/destination
// Method : GET 

app.get("/api/list/destination", (request, response) => {
  const sql_query = `SELECT * FROM travelix_destinations`;
  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send(result);
    }
  })
})

app.delete("/api/delete/destination/:id", (request, response) => {
  const sql_query = `DELETE FROM travelix_destinations WHERE id=${request.params.id}`;
  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send("Deleted successfully");
    }
  })
});

app.post("/api/create/hotel", (request, response) => {
  const sql_query =  `INSERT INTO travelix_hotels (name, destination, image, price, location, available) VALUES ('${request.body.name}', '${request.body.destination}', '${request.body.image}', '${request.body.price}',  '${request.body.location}', ${request.body.available})`;

  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send("Hotel has been created successfully");
    }
  })
})

app.get("/api/load/hotels", (request, response) => {
  const sql_query = `SELECT * FROM travelix_hotels`;
  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send(result);
    }
  })

})

app.get("/api/search/destination", (request, response) => {
  const destinationName = request.query.destinationName;
  const destinationLocation = request.query.destinationLocation;
  
  let sql_query = `SELECT * FROM travelix_destinations WHERE destinationName LIKE '${destinationName}%' AND location LIKE '${destinationLocation}%'`;
  

  if(destinationName == "" && destinationLocation == ""){
    response.status(500).send("No Search Data");
    return;
  }

  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send(result);
    }
  })
});

app.get("/api/search/hotel", (request, response) => {
  const destinationName = request.query.destinationName;

  const sql_query = `SELECT * from travelix_hotels WHERE destination LIKE '${destinationName}%'`;


  if(destinationName == ""){
    response.status(500).send("No Search Data");
    return;
  }

  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{

      const avaialbleHotles = result.filter((value , index) => {
        return value.available == 1
      })

      response.status(200).send(avaialbleHotles);
    }
  })

})

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log("Server is running");
})