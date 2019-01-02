// MVC中的M（model）将数据进行整理方便自己获取
export class Album {
  constructor(id, mId, name, img, singer, publicTime) {
    this.id = id;
    this.mId = mId;
    this.name = name;
    this.img = img;
    this.singer = singer;
    this.publicTime = publicTime;
  }
}

export function createAlbumByList(data) {
  return new Album(
    data.album_id, 
    data.album_mid,
    data.album_name,
    `http://y.gtimg.cn/music/photo_new/T002R300x300M000${data.album_mid}.jpg?max_age=2592000`,
    filtersSinger(data.singers),
    data.public_time)
}
function filtersSinger(singers) {
  let singerArray = singers.map(singer => singer.singer_name);
  return singerArray.join("/");
}