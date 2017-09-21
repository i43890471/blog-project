import express from "express";

import Post from "../models/posts";
import authenticate from "../middlewares/authenticate";

let router = express.Router();

router.get("/author/:id", (req, res) => {
  Post.query({
    where: { author: req.params.id }
  })
    .fetchAll()
    .then(posts => {
      res.json({ posts });
    })
    .catch(err => res.json({ err }));
});

router.get("/:id", (req, res) => {
  new Post({ id: req.params.id })
    .fetch()
    .then(post => {
      res.json({ post });
    })
    .catch(err => res.json({ err }));
});

router.get("/", (req, res) => {
  Post.query({})
    .fetchAll()
    .then(posts => {
      res.json({ posts });
    })
    .catch(err => res.json({ err }));
});

router.post("/create", authenticate, (req, res) => {
  const { title, content } = req.body;

  Post.forge(
    {
      title,
      content,
      author: req.currentUser.id
    },
    { hasTimestamps: true }
  )
    .save()
    .then(post => res.json({ success: true, post }))
    .catch(err => res.status(500).json({ error: err }));
});

router.put("/:id", authenticate, (req, res) => {
  const { id } = req.params;
  const { content, title } = req.body;

  new Post({ id: id })
    .set({ "title": title, "content": content })  
    .save()
    .then(result => {
        console.log('result: ', result);
        res.json({ success: true, id: id });
      })
    .catch(err => console.log("ERR: ", err));
});

router.delete("/:id", authenticate, (req, res) => {
  const { id } = req.params;

  Post.query({
    where: { id: id }
  })
    .destroy()
    .then(result => res.json({ success: true, deleted: id, result }))
    .catch(err => res.status(500).json(err));
});

export default router;
