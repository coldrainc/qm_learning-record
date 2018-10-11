// 'use strict';
/* jshint esversion: 6 */ 
var Book = function (isbn, title, author) {
    // 构造函数 construct
    // console.log(this);
    // isbn 有一定的规则
    // if (isbn === undefined) 
    //     throw new Error('Book constructor requires an isbn');
    if (!this.checkIsbn(isbn)){
        throw new Error('Book: Invallid ISBN.'); 
    }
    this.isbn = isbn;
    this.title = title || 'No title Specified';
    this.author = author || 'No author Specified';
};
Book.prototype = {
    // 返回bool值
    checkIsbn: function (isbn) {
        if (isbn === undefined || typeof isbn !== 'string'){
            return false;
        }
        if (isbn.length != 10 && isbn.length != 13){
            return false;
        }
        if (isbn.indexOf('x') == -1){
            return false;
        }
        return true;
    },
    getIsbn: function () {
        return this.isbn;
    },
    setIsbn: function (isbn) {
        // isbn 可以被随意的设置吗？ 超级管理员
        this.isbn = isbn;
    },
    getTitle: function () {
        return this.title;
    },
    setTitle: function (title) {
        this.title = title;
    },
    getAuthor: function () {
        return this.author;
    },
    setAuthor: function (author) {
        this.author = author;
    }
}; 
// 函数的执行方式决定this的指向
// 1. 作为普通函数 this 指向全局， 浏览器window ，node 后端 global
// 当启用严格模式的使用是undefined
// 2. 作为对象的方法被调用时
// Book();
let book = new Book('123456x123');
console.log(book.isbn, book.title, book.author);
console.log(book instanceof Book);