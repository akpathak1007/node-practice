console.log("Practicing methods of Array");

// todo: Array.prototype.concat() : array
{
  const concat = () => {
    let arr = [1, 2, 3, 4, 5];
    /* it will return new array with same values. */
    let newArr = arr.concat();
    /* It will concat both array arr and the array given as arguemnt */
    let otherArray = arr.concat([6, 7, 8]);
    /* Concartinate both values and array to an array */
    let arr2 = arr.concat("midnal", "anuj", "nrivyank", [9, 8, 7], true);
    /* concatinate nasted array */
    let arr3 = arr.concat(["midnal", "sharma"], [9, [8]]);
    console.log(arr3);
  };
  // concat();
}
// todo: Array.prototype.copyWithin(target, start[optional], end[optional]) : array
{
  copyWithin = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(arr.copyWithin(-2)); //[1, 2, 3, 4, 5,6, 7, 1, 2]
  };
  // copyWithin();
}
// todo: Array.prototype.entries() : iterator
{
  /* The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.  */
  const entries = () => {
    const arr = [
      "anuj",
      "kumar",
      "pathak",
      "midnal",
      "sharma",
      "nrivyank",
      "sharma",
      "nitish",
      "kumar",
    ];
    const iterator = arr.entries();
    for (let e of iterator) {
      console.log(e);
    }
  };
  // entries()
}
// todo: Array.prototype.every() : boolean
{
  /* Run a test for each element provided as callback. */
  const arr = [
    "anuj",
    "kumar",
    "pathak",
    "midnal",
    "sharma",
    "nrivyank",
    "sharma",
    "nitish",
    "kumar",
  ];
  const result = arr.every((element, index, array) => {
    if (element.length >= 4) {
      return true;
    } else {
      return false;
    }
  });
  console.log(result);
}
// todo: Array.prototype.fill(value, start[optional], end[optional]): array
{
  const fill = () => {
    const arr = [
      "anuj",
      "kumar",
      "pathak",
      "midnal",
      "sharma",
      "nrivyank",
      "sharma",
      "nitish",
      "kumar",
    ];
    console.log(arr.fill("hell", 3));
  };
  // fill()
}
// todo: Array.prototype.filter((element, index, array)=>{}) : array
// todo: Array.prototype.find()
// todo: Array.prototype.findIndex()
// todo: Array.prototype.flat()
// todo: Array.prototype.flatMap()
// todo: Array.from()
// todo: Array.prototype.includes()
// todo: Array.prototype.indexOf()
// todo: Array.isArray()
// todo: Array.prototype.join()
// todo: Array.prototype.keys()
// todo: Array.prototype.lastIndexOf()
// todo: Array.prototype.map()
// todo: Array.of()
// todo: Array.prototype.pop()
// todo: Array.prototype.push()
// todo: Array.prototype.reduce()
// todo: Array.prototype.reduceRight()
// todo: Array.prototype.reverse()
// todo: Array.prototype.shift()
// todo: Array.prototype.slice()
// todo: Array.prototype.some()
// todo: Array.prototype.sort()
// todo: Array.prototype.splice()
// todo: Array.prototype.toLocaleString()
// todo: Array.prototype.toSource()
// todo: Array.prototype.toString()
// todo: Array.prototype.toString()
// todo: Array.prototype.unshift()
// todo: Array.prototype.values()
