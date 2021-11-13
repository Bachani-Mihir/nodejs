const express = require('express');
const userroutes = require('../nodejs/router/userroutes');
const port = 4000;
const app = express();
app.use(express.json());

app.use("/",userroutes);
app.listen(port,() => console.log(`App Listening on port ${port}`));