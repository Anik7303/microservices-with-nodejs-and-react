const express = require("express");
const { randomBytes } = require("crypto");

const router = express.Router();

const commentsByPostId = {};

router.get("/posts/:postId/comments", (req, res) => {
    const { postId } = req.params;
    console.log({ postId: commentsByPostId[postId] });
    res.json(commentsByPostId[postId] || []);
});

router.post("/posts/:postId/comments", (req, res) => {
    const id = randomBytes(4).toString("hex");

    const { postId } = req.params;
    const { content } = req.body;

    if (commentsByPostId[postId] === undefined) {
        commentsByPostId[postId] = [];
    }
    commentsByPostId[postId] = [...commentsByPostId[postId], { id, content }];

    res.status(201).json(commentsByPostId[postId]);
});

module.exports = router;
