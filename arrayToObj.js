console.log('Array to object function');
const arr = [
  {
    first: 'midnal',
    middle: '',
    last: 'sharma',
    age: 22,
    address: 'dorinagar aligarh'
  },
  {
    first: 'Anuj',
    middle: 'Kumar',
    last: 'Pathak',
    age: 21,
    address: 'Noida sector 16'
  },
  {
    first: 'Nrivyank',
    middle: '',
    last: 'sharma',
    age: 20,
    address: 'Laxmi nagar delhi'
  },
  {
    first: 'Nitish',
    middle: '',
    last: 'Kumar',
    age: 21,
    address: 'Harsh vihar delhi'
  },
]

obj = {};
arr.forEach((element, index, array) => {
  console.log(element);
  obj[element.first] = element
})
console.log(obj);
