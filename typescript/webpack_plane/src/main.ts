// egret Main 类 
import {loadImage} from "./assetUtil";
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
      const bitmaps = await loadImage(assets) as egret.Bitmap[]; // await只能是一个promise  as egret.Bitmap[]只能返回Bitmap[]数组
      const [bg, hero, enemy] = bitmaps;
      this.addChild(bg);
      this.addChild(hero);
      this.addChild(enemy);
      
      this.centerAnchor(hero);
      this.centerAnchor(enemy);

      enemy.x = this.stage.stageWidth / 2;
      enemy.y = 200;
      hero.x = this.stage.stageWidth / 2;
      hero.y = this.stage.stageHeight - 100;
    }
    centerAnchor(displayObject: egret.DisplayObject) {
      displayObject.anchorOffsetX = displayObject.width / 2;
      displayObject.anchorOffsetY = displayObject.height / 2;
    }
  }

  
  window['Main'] = Main;
  egret.runEgret();