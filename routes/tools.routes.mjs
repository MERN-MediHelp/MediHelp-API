import express from "express";
import cors from "cors";
const router = express.Router();
import {getAllTools, LoadTools, DeleteTools, UpdateTools} from "../controllers/tools.controller.mjs";

// this method is only for static origin
// refer https://expressjs.com/en/resources/middleware/cors.html for more details
var corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    Headers: "Content-Type",
}

router.get('/', cors(corsOptions),  getAllTools);
router.post('/post', cors(corsOptions),  LoadTools);
router.delete('/delete/:id', cors(corsOptions),  DeleteTools);
router.put('/update/:id', cors(corsOptions), UpdateTools) ;

// module.exports = router;
export default router;