// Backend using Express.JS

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const app = express(); // initializing express app
const port = process.env.PORT || 8080;

const timeData = [];

//middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../build")));

// request handling
app.get("/api/history", (req, res) => {
	res.json(timeData);
});

app.post("/api/create", (req, res) => {
	const t = req.body.event;
	console.log(t);
	timeData.push(t);
	res.json("event added!");
});

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.all("*", (req, res) => {
	res.redirect("/");
});

// listining on port 8080
app.listen(port, () => {
	console.log(`App started on port ${port}`);
});
