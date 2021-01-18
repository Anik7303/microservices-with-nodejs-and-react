const express = require("express");
const cors = require("cors");

// routes
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(4000, () => {
    console.log("server listening on port 4000");
});
