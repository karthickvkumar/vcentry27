import express from "express";
import cors from "cors";
import mysql from "mysql";
import http from "http";

const app = express();
const server = http.createServer(app);
const UserList = [
  { name : "Archana"}, {name : "Deepak"}, {name : "Arun"}, {name : "Suresh"}, {name : "Karthick"}
];

app.use(cors({
  credentials : true,
  origin : "*"
}));

app.use(express.json());

// http://localhost:5000/api/test
// Method : GET

app.get("/api/test", (request, response) => {
  response.status(200).send("Node js API is working fine");
})


// http://localhost:5000/api/user/list
// Method : GET
app.get("/api/user/list", (request, response) => {
  response.status(200).send(UserList);
});

const portNumber = process.env.PORT || 5000;
server.listen(portNumber, () => {
  console.log("Node JS project is running")
})