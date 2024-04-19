
const { News } = require("./news");

class NewsService {
  news = [];

  constructor(news = []) {
    this.news = news;
  }

  getAll() {
    return [...this.news];
  }

  create(news) {
    let newNews = new News(news.title, news.description, news.date, news.imgUrl)
    this.news.push(newNews);
    return newNews
  }

  update(news) {
    let result
    for (const n of this.news) {
      if (n.id === news.id) {
        n = Object.create(news);
        result = n
        break;
      }
    }
    return result
  }

  delete(news) {
    this.news = this.news.filter((n) => n.id !== news.id);
  }
}

module.exports = { NewsService }