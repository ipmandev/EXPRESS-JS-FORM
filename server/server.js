const express = require("express");
const bodyParser = require("body-parser");
const cors = require ("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/form", (req,res)=>{
    const {name,age,email} = req.body;
    console.log("datos recibidos: ",{name, age, email});

    res.status(200).json({name, age, email});
});
app.listen(PORT);
console.log(`servidor en el puerto ${3000}`);