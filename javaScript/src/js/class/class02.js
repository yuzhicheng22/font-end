class Article {
    constructor(tittle, date) {
        this.tittle = tittle;
        this.date = date;
    }

    static compare(articleA, articleB) {
        return articleA.date - articleB.date;
    }

    // CreateTodays
    static createTodays() {
        return new this('Today\'s digest', new Date);
    }
}
let article = [
    new Article('HTML', new Date(2019, 1, 1)),
    new Article('CSS', new Date(2019, 0, 1)),
    new Article('Javascript', new Date(2019, 11, 11))
]

article.sort(Article.compare);
console.log(article[0]);

let todayArticle = Article.createTodays();
console.log(todayArticle);
