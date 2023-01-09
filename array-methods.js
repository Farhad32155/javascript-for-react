//different methods of array-->map,filter,find,forEach
//->map->it will return an array containing elements which I have selected. It will loop through and pick those elements and then make return

//let's take an array of objects
const products = [
    { name: 'laptop', price: 7000, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 3200, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ribon', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

//need to declare and store in a variable because it will return something and we store that return in this variable
const brands = products.map(product => (product.brand));
console.log(brands);
const prices = products.map(product => (product.price));
console.log(prices);

//if we don't want to return and just want to take every element and do something with it then we use forEach
products.forEach(product => console.log(product));
products.forEach(product => {
    //whatever we want to do with every elements come from looping one after another
});

//filter -> it will also return an array of those elements which will pass certain conditions
const cheap = products.filter(product => (product.price < 5000));
console.log(cheap);

//find->it will return a single object which pass the condition and apperaring first in the order in the array.
const name = products.find(product => (product.name.includes('n')));
console.log(name);