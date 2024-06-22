const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5005;

app.use(cors());
app.use(express.json());

let posts = [
  {
    id: 1,
    title: "First Post",
    content: "This is the content of the first post",
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the content of the second post",
  },
  {
    id: 3,
    title: "Third Post",
    content: "This is the content of the third post",
  },
];

app.get("/api/posts", (req, res) => {
  res.status(200).json(posts);
});

app.post("/api/posts", (req, res) => {
  const { title, content } = req.body;
  const newPost = { id: posts.length + 1, title, content };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.delete("/api/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id, 10);
  posts = posts.filter((post) => post.id !== postId);
  res.status(200).json(posts);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
