function* listPeople() {
  let i = 0;
  yield i;
  i++;
  yield i;
  i++;
  yield i;
}

const people = listPeople();
var test = {};
while(!test.done) {
  test = people.next();
  console.log(test);
}