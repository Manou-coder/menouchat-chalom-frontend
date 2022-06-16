const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const { error } = require("console");

const fs = require('fs');


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.use('/public', express.static(`${process.cwd()}/public`));

app.use('/views', express.static(`${process.cwd()}/views`));

app.get('/', (req, res, next) => {
    res.sendFile(`${process.cwd()}/views/index.html`);
})




module.exports = app;