// Use 'npm run serve-windows' or 'npm run serve-mac' for local dev

const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get("/", (req, res) => res.sendFile("index.html"));

app.listen(port, () => console.log(`Listening for HTTP on: ${port}`));
