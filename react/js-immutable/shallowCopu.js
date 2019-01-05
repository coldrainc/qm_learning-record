var shallowCopy = function(obj) {
  if(typeof obj !== 'object') return;
  var newObject = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if(obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObject;
}