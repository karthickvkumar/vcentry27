import express from "express";
import cors from "cors";
import mysql from "mysql";
import http from "http";

const app = express();
const server = http.createServer(app);

app.use(cors({
  credentials : true,
  origin : "*"
}));

app.use(express.json({ limit : "10mb" }));



const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log("Server is running");
})