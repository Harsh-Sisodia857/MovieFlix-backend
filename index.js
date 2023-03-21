const express = require("express");
const app = express();
const db = require('./config/mongoose')

app.use(express.json());

app.use('/', require('./Routes/index.js'))


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


