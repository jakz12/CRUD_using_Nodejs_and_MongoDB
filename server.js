const express = require('express');
const mongoose =  require('mongoose');
const app = express();
const cors = require('cors');

require('dotenv').config();
app.use(express.json());
app.use(cors());

const uri = process.env.ATLAS_URL;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open',() =>{
    console.log("Database connected");
});

const employeeRouter = require('./Routes/employee');

app.use('/api/employee',employeeRouter);

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server running on ${port}...... `);
});