const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fetchUserRouter = require("./routes/user");
;

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(fetchUserRouter);


app.listen(4500, ()=>{
    console.log("App is running in port", 4500);
})