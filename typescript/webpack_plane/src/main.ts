// egret Main 类 
class Main extends egret.DisplayObjectContainer {
    constructor () {
      super(); 
      // 如果子类要有自己的构造函数代码， 选运行父类构造函数
      this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }
    onAddToStage (event) {
      this.createGame();
    }

    async createGame() {
      // 加载资源
      const assets = [
        'assets/background.png',
        'assets/hero.png',
        'assets/enemy.png'
      ];
      // loadImae Promise
      const bitmaps = await loadImage(assets) as egret.Bitmap[];
    }
  }
  
  window['Main'] = Main;
  egret.runEgret();
  