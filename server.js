/* All kind of loops */
let arr = [1, 2, 3, 4, 5, 6];

let obj = {
  first: "Anuj",
  middle: "Kumar",
  last: "Pathak",
  age: 23,
  address: "Dorinagar aligarh",
};
let i = 0;
// todo: for statement
const forStatement = () => {
  for (i; i < arr.length; i++) {
    console.log(`this is for statement${arr[i]}`);
  }
};
//  forStatement();
// todo: do while loop
const doWhile = () => {
  do {
    console.log(`this is do while statement ${arr[i]}`);
    i++;
  } while (i < arr.length);
};
// doWhile();
// todo: while loop executes its statement untill the expression evaluates to true
const whileStatement = () => {
  while (i < arr.length) {
    console.log(`while statement i=${i} ${arr[i]}`);
    i++;
  }
};

// todo: for in statement:- this loop iterates over a specified variable over all the enumarable properties of an object. 
// ! for in loop works for object.
const forInStatementForObject = () => {
  for (i in obj) {
    console.log(i);
  }
}
// ! Array is also an object for for in loop work fine with array.
const forInStatementForArray = () => {
  for (i in arr) {
    console.log(i);
  }
}
// forInStatementForObject()
// forInStatementForArray()
// todo: for of statement: 
const forOfStatement = () => {
  // !for of loop does not work with uniterable object. 
  for (i of arr) {
    console.log(i);
  }
}
// forOfStatement()

