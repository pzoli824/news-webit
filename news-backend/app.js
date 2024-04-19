const express = require("express");
const { newsData } = require("./news");
const { NewsService } = require("./news.service");
const app = express();
const cors = require('cors');
const port = 3000;
app.use(cors())

const newsService = new NewsService([...newsData])

app.use(express.json());

app.get("/news", (req, res) => {
  res.status(200).send(newsService.getAll());
});
app.post("/news", (req, res) => {
  let createdData = newsService.create(req.body.body)
  res.status(201).send(createdData);
});
app.put("/news", (req, res) => {
  const updatedData = newsService.update(req.body)
  res.status(200).send(updatedData);
});
app.delete("/news", (req, res) => {
  newsService.delete(req.body)
  res.status(200).send({});
});

app.listen(port, () => {
  console.log(`Backend app listening on port ${port}`);
});
