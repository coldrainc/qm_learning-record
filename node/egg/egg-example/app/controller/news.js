const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    const dataList = {
      list: [
        { id: 1, title: 'this news 1', url: '/news/1'},
        { id: 2, title: 'this news 2', url: '/news/2'},
        { id: 3, title: 'this news 3', url: '/news/3'},
        { id: 4, title: 'this news 4', url: '/news/4'},
      ]
    }
    await this.ctx.render('news/list.tpl', dataList)
  }
  async item() {
    const id = this.ctx.params.id || 1;
    console.log(id);
    await this.ctx.render('news/item.tpl', id)
  }
}
module.exports = NewsController