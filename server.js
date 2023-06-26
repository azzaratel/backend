const express=require("express");
const app=express();
app.use(express.json());
require("dotenv").config();
const db_connect=require("./connect_BD");

db_connect();


app.use("/user", require("./routes/user"))

app.listen(process.env.PORT,(err)=>err?console.log(err): console.log("server is ruunig")
);