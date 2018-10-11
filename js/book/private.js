// isbn title author
// public 有问题
// 私有化
/* jshint esversion: 6 */ 


var Book = (function () {
    // 闭包
    var numOfBooks = 0;
    return function (newIsbn, newTitle, newAuthor) {
        // constructor
        console.log(newIsbn, newTitle, newAuthor, numOfBooks);
        var isbn, title, author;
        numOfBooks++;

        var checkIsbn = function (isbn) {
            if (!isbn || typeof isbn !== 'string'){
                throw new Error('isbn 有误');
            }
            return true;
        };

        this.setTitle = function (newTitle) {
            title = newTitle || 'No title specified';
        };

        // setTitle();
        this.getTitle = function () {
            return title;
        };

        this.setIsbn = function (isbn) {
            if (checkIsbn(newIsbn))
                this.Isbn = newIsbn;
        };

        this.getIsbn = function () {
            return isbn;
        };
        this.getNumOfBooks = function () {
            return numOfBooks;
        };
        this.setTitle(newTitle);
        this.setIsbn(newIsbn);
        console.log(`创建了${numOfBooks}本书`);
    };
})();

// 静态方法
Book.conertToTitleCase = function (inputString) {
    return inputString.toUpperCase();
};

Book.prototype = {
    display: function () {
        console.log(`这本书名是${this.getTitle()}`, `作者是${this.getAuthor()}`);
    }
};

var book = new Book('123', '飞鸟集', '泰格瑞');
var book2 = new Book('1234', '人工智能', '我');
console.log(book.getTitle());
