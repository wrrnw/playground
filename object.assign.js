const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, { a: 2, b: 4 });


/* Cloning an object */
var obj = { a: 1 };
var copy = obj;
// copy.a = 2;
// var copy = Object.assign({}, obj);
// console.log(obj);
// console.log(copy);


/* Warning for Deep Clone */
function test() {
  'use strict'

  let obj1 = { a: 0, b: {c: 0}};
  let obj2 = Object.assign({}, obj1);
  // console.log(JSON.stringify(obj2));

  obj1.a = 1;
  console.log(JSON.stringify(obj1));
  console.log(JSON.stringify(obj2));

  obj2.a = 2;
  console.log(JSON.stringify(obj1));
  console.log(JSON.stringify(obj2));

  obj2.b.c = 3;
  console.log(JSON.stringify(obj1));
  console.log(JSON.stringify(obj2));

  /* Deep Clone */
  obj1 = { a: 0, b: {c: 0}};
  let obj3 = JSON.parse(JSON.stringify(obj1));
  obj1.a = 4;
  obj1.b.c = 4;
  console.log(JSON.stringify(obj1));
  console.log(JSON.stringify(obj3)); 
}

// test();

/* Merging objects */
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
// console.log(obj);
// console.log(o1);

/* Merging objects with same properties */
var o1 = { a: 1, b: 2, c: 3 };
var o2 = { b: 2, c: 2 };
var o3 = { c: 3 };

var obj = Object.assign({}, o1, o2, o3);
// console.log(obj);


/* Copying symbol-typed properties */
var o1 = { a: 1 };
var o2 = { [Symbol('foo')]: 2 };

var obj = Object.assign({}, o1, o2);
console.log(obj);
Object.getOwnPropertySymbols(obj);