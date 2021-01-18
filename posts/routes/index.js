const express = require("express");
const { randomBytes } = require("crypto");

const router = express.Router();

const posts = {};

router.get("/posts", (req, res) => {
    res.json(posts);
});

router.post("/posts", (req, res) => {
    const { title } = req.body;
    const id = randomBytes(4).toString("hex");

    posts[id] = { id, title };

    res.status(201).json(posts[id]);
});

module.exports = router;
