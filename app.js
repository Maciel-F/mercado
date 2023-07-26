const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "view", "home.html")))

app.get("/register", (req, res) => res.sendFile(path.join(__dirname, "view", "register.html")))

app.get("/login", (req, res) => res.sendFile(path.join(__dirname, "view", "login.html")))

app.listen(PORT, () => console.log("el servidor esta andando en el puerto" + " " +PORT));
