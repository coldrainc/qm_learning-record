// const game = new Pharser.Game();
// Phaser 命名空间 
const Phaser = {};
Phaser.Game = function(w, h, type, selector, options){
    console.log('构造函数');
    this.width = w;
    this.height = h;
    this.type = type;
    this.selector = selector;
    this.options = options;

};

let zombieGame = new Phaser.Game(800, 600);
console.log(zombieGame.width, zombieGame.height);