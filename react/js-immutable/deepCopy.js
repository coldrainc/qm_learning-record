var deepCopy = function(obj) {
  if(typeof obj !== 'object') return;
  var newObject = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if(obj.hasOwnProperty(key)) {
      newObj[key] = typeof(obj[key]) === 'object' ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObject;
}