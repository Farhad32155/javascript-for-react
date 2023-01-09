//JSON--javascript object notation

const student = {//this is a normal js object
    name: 'farhad',
    age: 24,
    books: ['handsOn', 'let us c', 'compiler design']
};
//now let's make this normal js object a JSON
//for that we need to call JSON first then .stringify(objectName)
//JSON has no single quotation
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);
//now let's see how we can convert a JSON into a normal js object
//for that we need to call JSON first anf the parse that JSON
const studentObject = JSON.parse(studentJSON);
console.log(studentObject);

//--fetch--
/* fetch('url')
    .then(res => res.json())
    .then(data => console.log(data)); */

//first of all I need to fetch the api/url
//then it will give me back a response and I need to convert that response into json
//then it will give me the data and then I can do whatever I want with that data
//**carefully observe in which form data has came to me */ 

//keys, values
const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys);
console.log(values);

//forEach in array if we do not want any return if wanto to do anything and return then use map
const numbers = [10, 20, 30, 25, 15];
numbers.forEach(num => console.log(num));
numbers.map(num => console.log(num * 2));

//for of--on array like object--arguments,getElementsByClassName,queryselectorall bla bla bla
//for in--loop on an object using for in

//->add or remove from an array--with breaking the reference
const products = [
    { name: 'laptop', price: 7000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 3200, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const newProduct = { name: 'webcam', price: 7000, brand: 'Lal' };
//copy products array and then add newProduct
const newProducts = [...products, newProduct];//reference has been broken with the old array(products)
console.log(newProducts);

//create a new array without one specefic item
//remove phone(or any other element) means create a new array without the phone
const remaining = products.filter(p => p.name !== 'phone');
console.log(remaining);

