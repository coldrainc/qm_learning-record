import Loki from 'lokijs'

// 向外输出数据库的句柄, lokijs 写起来像mysql ，先缓存在前端的
export const db = new Loki('notes', {
  autoload: true,
  autoloadCallback: databaseInitialize,
  autosave: true,
  autosaveInterval: 3000,
  persistenceMethod: 'localStorage'
});

function databaseInitialize() {
  const notes = db.getCollection('notes');
  if(notes == null) {
    db.addCollection('notes');
  }
}

export function loadCollection(collection) {
  return new Promise((resolve) => {
    db.loadDatabase({}, () => {
      const _collection = db.getCollection(collection);
      resolve(_collection);
    })
  })
}