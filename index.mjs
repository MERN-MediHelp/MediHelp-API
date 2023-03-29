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

// initiallize app
app.use(bodyParser.json());
app._router.use(bodyParser.urlencoded({ extended: false }));
app.use("/tools", router);

// port 
let port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});