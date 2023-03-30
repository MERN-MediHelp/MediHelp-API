import db from "../db/conn.mjs";

async function getAllTools (req, res) { 
    let collection  = await db.collection("medical equipment");
    let tools = await collection.find({}).toArray();
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.send(tools).status(200);
};

async function LoadTools (req, res, next) {
    var newTool = new Object();
    newTool =  {
        name: req.body.toolName,
        description: req.body.toolDescription
    }
    console.log(req.body);
    console.log(newTool);
    let result = await db.collection("medical equipment").insertOne(newTool);

    if (result) {
        res.send(result).status(200);
    } else { 
        res.send("Error").status(500);
    }
}

export {
    getAllTools,
    LoadTools,
}