const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post' },
    { id: 3, title: 'Third Post', content: 'This is the content of the third post' },
  ];

  //endpoint to get all posts
  app.get('/api/posts', (_, res) => {
    res.json(posts);
  });

  //endpoint to add a new post
  app.post('/api/posts', (req,res) => {
    const {title, content} = req.body;
    const newPost = {id: posts.length + 1, title, content};
    posts.push(newPost);
    res.status(201).json(newPost);
  });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});