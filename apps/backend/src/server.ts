import express from "express";
const app = express();
app.get("/", (req, res) => res.send("Backend ready!"));
app.listen(3001, () => console.log("Server on port 3001"));
