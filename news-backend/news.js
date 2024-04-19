class News {
  constructor(title, description, date, imgUrl) {
    this.id = News.generateUid();
    this.title = title;
    this.description = description;
    this.date = date;
    this.imgUrl = imgUrl;
  }

  static generateUid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}

const newsData = [
  new News(
    "News title 1",
    "temporary description short",
    new Date("2024-04-12"),
    "assets/images/breaking-news-1.jpg"
  ),
  new News(
    "News title 2",
    "temporary description longerrrr",
    new Date("2024-04-13"),
    "assets/images/breaking-news-2.jpg"
  ),
  new News(
    "News title 3",
    "temporary description long long long",
    new Date("2024-04-14"),
    "assets/images/breaking-news-3.jpg"
  ),
  new News(
    "News title 4",
    "temporary description very looooooooooooooong",
    new Date("2024-04-15"),
    "assets/images/breaking-news-4.jpg"
  ),

  new News(
    "News title 5",
    "temporary description too loooooooooooooooooooooooooooooooooooong",
    new Date("2024-04-16"),
    "assets/images/breaking-news-5.jpg"
  ),
  new News(
    "News title 6",
    "temporary description looooooooooooooooooooooooooooooooooooooooooong loooooooooooooooooooooooong",
    new Date("2024-04-17"),
    "assets/images/breaking-news-6.jpg"
  ),
  new News(
    "News title 7",
    "temporary description looooooooooooooooooooooooooooooooooooooooooooooong loooooooooooooooooooooooooooooooooong looooooooooooooo ooooooooooooong",
    new Date("2024-04-17"),
    "assets/images/breaking-news-7.jpg"
  ),

  new News(
    "News title 8",
    "temporary description dqwwq dwqdwqd kdkwqkd qwdqwdq dwqdwqd iii qw wq wqd qw wq qw qw wq wqe qwe q qw dqdqw dqw d qkwqwekqwkeqwkek qwlkeqwlkewqklekqwlelkqw qwelkwqlkeqwlkelqwkeqwlkeqwds ssss wqdqwd dqwdqw dwd wqd wqd qsssssssssss",
    new Date("2024-04-18"),
    "assets/images/breaking-news-8.jpg"
  ),
];

module.exports = { newsData, News };
