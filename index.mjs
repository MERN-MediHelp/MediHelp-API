import "./loadEnvironment.mjs";
// import dotenv from "dotenv";
// dotenv.config({path:"E:\\JavaScript\\React\\Server\\.env"}); // path to .env file
// require('dotenv').config({path:__dirname+'/./../../.env'})
// import path from "path";
// dotenv.config({ path: "E:\\JavaScript\\React\\Server\\.env" })
import express from "express";
const app = express();
import bodyParser from "body-parser";
import router from "./routes/tools.routes.mjs";
import cors from "cors";

const corsOptions = { 
    origin: "http://localhost:3000",
    optionSuccessStatus: 200,
}

// initiallize app
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
app.use(express.json());
app._router.use(bodyParser.urlencoded({ extended: false }));
app.use("/tools", router);

// port 
let port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});