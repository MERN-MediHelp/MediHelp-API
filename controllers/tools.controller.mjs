import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

async function getAllTools (req, res) { 
    let collection  = await db.collection("medical equipment");
    let tools = await collection.find({}).toArray();
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.send(tools).status(200);
};

async function LoadTools (req, res, next) {
    var newTool = new Object();
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    newTool =  {
        name: req.body.toolName,
        description: req.body.toolDescription,
      };
    // console.log(req.body);
    // console.log(req.body.toolName);
    // console.log(newTool);
    let result = await db.collection("medical equipment").insertOne(newTool);

    if (result) {
        res.send(result).status(200);
    } else { 
        res.send("Error").status(500);
    }
}

async function DeleteTools(req, res) {
    const toDelete = { _id: new ObjectId(req.params.id)};
    let result = await db.collection("medical equipment").deleteOne(toDelete);

    if (result) {
        res.send(result).status(200);
    } else {    
        res.send("Error").status(500);
    }
}

export {
    getAllTools,
    LoadTools,
    DeleteTools,
}