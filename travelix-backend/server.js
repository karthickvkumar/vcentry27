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


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log("Server is running");
})