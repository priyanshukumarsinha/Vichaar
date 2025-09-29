// app/backend/src/app.js

import express from "express";

const app = express();

app.use(express.json());

app.get("/health",(req, res) =>{
    res.send("Backend is running fine!!");
})

export default app;